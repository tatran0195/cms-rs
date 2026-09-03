import { getLocale } from '../runtime.js';

const translations = {"ar":"لا","bn":"না","de":"Nein","en":"No","es":"No","fr":"Non","hi":"नहीं","id":"Tidak","pt-BR":"Não","ru":"Нет","ur":"نہیں","zh-CN":"否"};

export function site_feedbackno(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
