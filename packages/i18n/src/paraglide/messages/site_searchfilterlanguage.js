import { getLocale } from '../runtime.js';

const translations = {"ar":"لغة النتائج","bn":"Result language","de":"Result language","en":"Result language","es":"Result language","fr":"Result language","hi":"Result language","id":"Result language","pt-BR":"Result language","ru":"Result language","ur":"Result language","zh-CN":"Result language"};

export function site_searchfilterlanguage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
