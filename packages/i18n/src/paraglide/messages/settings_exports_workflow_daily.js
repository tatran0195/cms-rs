import { getLocale } from '../runtime.js';

const translations = {"ar":"يوميًا","bn":"দৈনিক","de":"Täglich","en":"Daily","es":"Diariamente","fr":"Quotidiennement","hi":"दैनिक","id":"Setiap hari","pt-BR":"Diariamente","ru":"Ежедневно","ur":"روزانہ","zh-CN":"每日"};

export function settings_exports_workflow_daily(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
