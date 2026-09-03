import { getLocale } from '../runtime.js';

const translations = {"ar":"قوائم الانتظار","bn":"Queues","de":"Queues","en":"Queues","es":"Queues","fr":"Queues","hi":"Queues","id":"Queues","pt-BR":"Queues","ru":"Queues","ur":"Queues","zh-CN":"Queues"};

export function admin_operations_queues(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
