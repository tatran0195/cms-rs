import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحة العربية","bn":"Arabic page","de":"Arabic page","en":"Arabic page","es":"Arabic page","fr":"Arabic page","hi":"Arabic page","id":"Arabic page","pt-BR":"Arabic page","ru":"Arabic page","ur":"Arabic page","zh-CN":"Arabic page"};

export function marketing_machine_arabic_pagelabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
