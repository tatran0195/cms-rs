import { getLocale } from '../runtime.js';

const translations = {"ar":"كتل الشيفرة","bn":"কোড ব্লক","de":"Codeblöcke","en":"Code blocks","es":"Bloques de código","fr":"Blocs de code","hi":"कोड ब्लॉक","id":"Blok kode","pt-BR":"Blocos de código","ru":"Блоки кода","ur":"کوڈ بلاکس","zh-CN":"代码块"};

export function settings_theme_code(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
