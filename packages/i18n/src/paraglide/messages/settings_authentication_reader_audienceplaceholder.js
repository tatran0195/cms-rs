import { getLocale } from '../runtime.js';

const translations = {"ar":"العملاء","bn":"গ্রাহকদের","de":"Kunden","en":"Customers","es":"Clientes","fr":"Clients","hi":"ग्राहक","id":"Pelanggan","pt-BR":"Clientes","ru":"Клиенты","ur":"گاہکوں","zh-CN":"客户"};

export function settings_authentication_reader_audienceplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
