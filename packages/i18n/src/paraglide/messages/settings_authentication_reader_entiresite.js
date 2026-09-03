import { getLocale } from '../runtime.js';

const translations = {"ar":"الموقع كاملًا","bn":"পুরো সাইট","de":"Gesamte Website","en":"Entire site","es":"Todo el sitio","fr":"Site entier","hi":"संपूर्ण साइट","id":"Seluruh situs","pt-BR":"Site inteiro","ru":"Весь сайт","ur":"پوری سائٹ","zh-CN":"整个网站"};

export function settings_authentication_reader_entiresite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
