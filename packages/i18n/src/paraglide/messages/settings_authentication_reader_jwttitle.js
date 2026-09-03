import { getLocale } from '../runtime.js';

const translations = {"ar":"تسليم بوابة JWT","bn":"JWT পোর্টাল হ্যান্ডঅফ","de":"JWT Portalübergabe","en":"JWT portal handoff","es":"JWT transferencia de portal","fr":"Transfert du portail JWT","hi":"JWT पोर्टल हैंडऑफ़","id":"JWT penyerahan portal","pt-BR":"JWT transferência do portal","ru":"Передача портала JWT","ur":"JWT پورٹل ہینڈ آف","zh-CN":"JWT 门户切换"};

export function settings_authentication_reader_jwttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
