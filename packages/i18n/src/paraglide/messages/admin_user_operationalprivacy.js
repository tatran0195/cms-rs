import { getLocale } from '../runtime.js';

const translations = {"ar":"يعرض هذا الملخص حالات تشغيلية محدودة، من دون أسرار أو محتوى خاص.","bn":"Operational Privacy","de":"Operational Privacy","en":"Operational Privacy","es":"Operational Privacy","fr":"Operational Privacy","hi":"Operational Privacy","id":"Operational Privacy","pt-BR":"Operational Privacy","ru":"Operational Privacy","ur":"Operational Privacy","zh-CN":"Operational Privacy"};

export function admin_user_operationalprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
