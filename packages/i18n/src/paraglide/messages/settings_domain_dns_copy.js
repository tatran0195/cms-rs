import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ سجل DNS","bn":"DNS রেকর্ড কপি করুন","de":"DNS-Eintrag kopieren","en":"Copy DNS record","es":"Copiar registro DNS","fr":"Copier l'enregistrement DNS","hi":"डीएनएस रिकॉर्ड कॉपी करें","id":"Salin catatan DNS","pt-BR":"Copiar registro DNS","ru":"Копировать DNS-запись","ur":"DNS ریکارڈ کاپی کریں۔","zh-CN":"复制 DNS 记录"};

export function settings_domain_dns_copy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
