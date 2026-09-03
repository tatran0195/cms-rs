import { getLocale } from '../runtime.js';

const translations = {"ar":"العربية","bn":"Arabic","de":"Arabic","en":"Arabic","es":"Arabic","fr":"Arabic","hi":"Arabic","id":"Arabic","pt-BR":"Arabic","ru":"Arabic","ur":"Arabic","zh-CN":"Arabic"};

export function marketing_machine_arabic_heading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
