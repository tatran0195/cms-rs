import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض {count} سجلات {record} من الصف الحديث المحدود.","bn":"Showing {count} {record} records from the bounded recent queue.","de":"Showing {count} {record} records from the bounded recent queue.","en":"Showing {count} {record} records from the bounded recent queue.","es":"Showing {count} {record} records from the bounded recent queue.","fr":"Showing {count} {record} records from the bounded recent queue.","hi":"Showing {count} {record} records from the bounded recent queue.","id":"Showing {count} {record} records from the bounded recent queue.","pt-BR":"Showing {count} {record} records from the bounded recent queue.","ru":"Showing {count} {record} records from the bounded recent queue.","ur":"Showing {count} {record} records from the bounded recent queue.","zh-CN":"Showing {count} {record} records from the bounded recent queue."};

export function admin_operations_showing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
