import { getLocale } from '../runtime.js';

const translations = {"ar":"الأدلة","bn":"গাইড","de":"Führer","en":"Guides","es":"Guías","fr":"Guides","hi":"मार्गदर्शक","id":"Panduan","pt-BR":"Guias","ru":"Путеводители","ur":"رہنما","zh-CN":"指南"};

export function settings_navbar_tabs_labelplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
