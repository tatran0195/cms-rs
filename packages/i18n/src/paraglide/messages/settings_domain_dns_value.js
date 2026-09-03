import { getLocale } from '../runtime.js';

const translations = {"ar":"القيمة","bn":"মান","de":"Wert","en":"Value","es":"Valor","fr":"Valeur","hi":"मूल्य","id":"Nilai","pt-BR":"Valor","ru":"Значение","ur":"قدر","zh-CN":"价值"};

export function settings_domain_dns_value(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
