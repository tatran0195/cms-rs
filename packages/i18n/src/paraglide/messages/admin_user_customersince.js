import { getLocale } from '../runtime.js';

const translations = {"ar":"عميل منذ {date}","bn":"Customer Since {date}","de":"Customer Since {date}","en":"Customer Since {date}","es":"Customer Since {date}","fr":"Customer Since {date}","hi":"Customer Since {date}","id":"Customer Since {date}","pt-BR":"Customer Since {date}","ru":"Customer Since {date}","ur":"Customer Since {date}","zh-CN":"Customer Since {date}"};

export function admin_user_customersince(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
