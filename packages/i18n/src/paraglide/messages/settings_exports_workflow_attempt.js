import { getLocale } from '../runtime.js';

const translations = {"ar":"المحاولة {count}","bn":"প্রচেষ্টা {count}","de":"Versuch {count}","en":"Attempt {count}","es":"Intento {count}","fr":"Tentative {count}","hi":"प्रयास {count}","id":"Coba {count}","pt-BR":"Tentativa {count}","ru":"Попытка {count}","ur":"کوشش {count}","zh-CN":"尝试 {count}"};

export function settings_exports_workflow_attempt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
