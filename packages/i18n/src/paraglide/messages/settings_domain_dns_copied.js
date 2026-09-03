import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نسخ سجل DNS","bn":"DNS রেকর্ড কপি করা হয়েছে","de":"DNS-Eintrag kopiert","en":"DNS record copied","es":"Registro DNS copiado","fr":"Enregistrement DNS copié","hi":"डीएनएस रिकॉर्ड कॉपी किया गया","id":"Catatan DNS disalin","pt-BR":"Registro DNS copiado","ru":"DNS-запись скопирована.","ur":"DNS ریکارڈ کاپی ہو گیا۔","zh-CN":"DNS 记录已复制"};

export function settings_domain_dns_copied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
