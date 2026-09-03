import { getLocale } from '../runtime.js';

const translations = {"ar":"قائمة الانتظار","bn":"Queue","de":"Queue","en":"Queue","es":"Queue","fr":"Queue","hi":"Queue","id":"Queue","pt-BR":"Queue","ru":"Queue","ur":"Queue","zh-CN":"Queue"};

export function admin_operations_queue(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
