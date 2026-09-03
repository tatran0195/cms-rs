import { getLocale } from '../runtime.js';

const translations = {"ar":"جودة البحث","bn":"Search quality","de":"Search quality","en":"Search quality","es":"Search quality","fr":"Search quality","hi":"Search quality","id":"Search quality","pt-BR":"Search quality","ru":"Search quality","ur":"Search quality","zh-CN":"Search quality"};

export function analytics_section_searchquality(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
