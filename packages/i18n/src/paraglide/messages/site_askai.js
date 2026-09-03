import { getLocale } from '../runtime.js';

const translations = {"ar":"اسأل الذكاء الاصطناعي","bn":"Ask AI","de":"Ask AI","en":"Ask AI","es":"Ask AI","fr":"Ask AI","hi":"Ask AI","id":"Ask AI","pt-BR":"Ask AI","ru":"Ask AI","ur":"Ask AI","zh-CN":"Ask AI"};

export function site_askai(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
