import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} صفحة","bn":"{count} পৃষ্ঠা","de":"{count} Seiten","en":"{count} pages","es":"{count} páginas","fr":"{count} pages","hi":"{count} पृष्ठ","id":"{count} halaman","pt-BR":"{count} páginas","ru":"{count} страниц","ur":"{count} صفحات","zh-CN":"{count} 页"};

export function dashboard_pages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
