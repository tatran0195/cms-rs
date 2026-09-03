import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تحميل طوابير العمليات.","bn":"Operational queues could not be loaded.","de":"Operational queues could not be loaded.","en":"Operational queues could not be loaded.","es":"Operational queues could not be loaded.","fr":"Operational queues could not be loaded.","hi":"Operational queues could not be loaded.","id":"Operational queues could not be loaded.","pt-BR":"Operational queues could not be loaded.","ru":"Operational queues could not be loaded.","ur":"Operational queues could not be loaded.","zh-CN":"Operational queues could not be loaded."};

export function admin_operations_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
