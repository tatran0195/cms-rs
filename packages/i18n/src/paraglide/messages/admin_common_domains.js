import { getLocale } from '../runtime.js';

const translations = {"ar":"النطاقات","bn":"Domains","de":"Domains","en":"Domains","es":"Domains","fr":"Domains","hi":"Domains","id":"Domains","pt-BR":"Domains","ru":"Domains","ur":"Domains","zh-CN":"Domains"};

export function admin_common_domains(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
