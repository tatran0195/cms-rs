import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الإرسال…","bn":"Sending…","de":"Sending…","en":"Sending…","es":"Sending…","fr":"Sending…","hi":"Sending…","id":"Sending…","pt-BR":"Sending…","ru":"Sending…","ur":"Sending…","zh-CN":"Sending…"};

export function admin_signin_sending(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
