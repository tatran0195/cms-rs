import { getLocale } from '../runtime.js';

const translations = {"ar":"تنبيهات المشغل","bn":"Operator attention","de":"Operator attention","en":"Operator attention","es":"Operator attention","fr":"Operator attention","hi":"Operator attention","id":"Operator attention","pt-BR":"Operator attention","ru":"Operator attention","ur":"Operator attention","zh-CN":"Operator attention"};

export function admin_overview_attention(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
