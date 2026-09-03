import { getLocale } from '../runtime.js';

const translations = {"ar":"خطوات","bn":"ধাপ","de":"Schritte","en":"Steps","es":"Pasos","fr":"Étapes","hi":"कदम","id":"Langkah-langkah","pt-BR":"Passos","ru":"Шаги","ur":"قدم","zh-CN":"步骤"};

export function editor_slash_steps_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
