import { getLocale } from '../runtime.js';

const translations = {"ar":"النوع","bn":"টাইপ","de":"Typ","en":"Type","es":"Tipo","fr":"Tapez","hi":"प्रकार","id":"Ketik","pt-BR":"Tipo","ru":"Тип","ur":"قسم","zh-CN":"类型"};

export function settings_domain_dns_type(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
