import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const i18nDir = path.resolve(__dirname, '..');
const messagesDir = path.resolve(i18nDir, 'messages');
const outDir = path.resolve(i18nDir, 'src/paraglide');
const outMessagesDir = path.resolve(outDir, 'messages');

// Clean and recreate
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outMessagesDir, { recursive: true });

// Read all locale JSON files
const localeFiles = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));
const locales = [];
const allData = {};

for (const file of localeFiles) {
  const locale = path.basename(file, '.json');
  locales.push(locale);
  const content = JSON.parse(fs.readFileSync(path.join(messagesDir, file), 'utf-8'));
  allData[locale] = content;
}

const baseLocale = 'en';
const rawKeys = Object.keys(allData[baseLocale] || {}).filter(k => !k.startsWith('$'));

// 1. Generate runtime.js and runtime.d.ts
const runtimeJs = `let currentLocale = 'en';

export const baseLocale = 'en';
export const locales = ${JSON.stringify(locales)};

export function getLocale() {
  if (typeof document !== 'undefined') {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('CMS_LOCALE=') || row.startsWith('NIBLEAF_LOCALE='));
    if (cookie) {
      const val = cookie.split('=')[1];
      if (locales.includes(val)) return val;
    }
  }
  return currentLocale;
}

export async function setLocale(locale, options = {}) {
  if (locales.includes(locale)) {
    currentLocale = locale;
    if (typeof document !== 'undefined') {
      document.cookie = \`CMS_LOCALE=\${locale}; path=/; max-age=31536000; SameSite=Lax\`;
    }
  }
}
`;

const runtimeDts = `export const baseLocale: "en";
export const locales: readonly ${JSON.stringify(locales)};
export type Locale = (typeof locales)[number];
export function getLocale(): string;
export function setLocale(locale: string, options?: { reload?: boolean }): Promise<void>;
`;

fs.writeFileSync(path.join(outDir, 'runtime.js'), runtimeJs, 'utf-8');
fs.writeFileSync(path.join(outDir, 'runtime.d.ts'), runtimeDts, 'utf-8');

// 2. Generate per-message files
const exportStatements = [];

for (const key of rawKeys) {
  const validFnName = key.replace(/[^a-zA-Z0-9_$]/g, '_');
  const transMap = {};
  for (const loc of locales) {
    if (allData[loc] && allData[loc][key] !== undefined) {
      transMap[loc] = allData[loc][key];
    }
  }

  const msgJs = `import { getLocale } from '../runtime.js';

const translations = ${JSON.stringify(transMap)};

export function ${validFnName}(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\\{(\\w+)\\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : \`{\${k}}\`);
}
`;

  const msgDts = `export declare function ${validFnName}(params?: Record<string, string | number>, options?: { locale?: string }): string;
`;

  fs.writeFileSync(path.join(outMessagesDir, `${validFnName}.js`), msgJs, 'utf-8');
  fs.writeFileSync(path.join(outMessagesDir, `${validFnName}.d.ts`), msgDts, 'utf-8');
  exportStatements.push(`export { ${validFnName} } from './messages/${validFnName}.js';`);
}

// 3. Generate messages.js and messages.d.ts
fs.writeFileSync(path.join(outDir, 'messages.js'), exportStatements.join('\n') + '\n', 'utf-8');
fs.writeFileSync(path.join(outDir, 'messages.d.ts'), exportStatements.join('\n') + '\n', 'utf-8');

console.log(`Successfully compiled ${rawKeys.length} messages for ${locales.length} locales into ${outDir}`);
