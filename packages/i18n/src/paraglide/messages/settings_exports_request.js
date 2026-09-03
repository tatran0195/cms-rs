import { getLocale } from '../runtime.js';

const translations = {"ar":"تواصل مع المبيعات","bn":"যোগাযোগ বিক্রয়","de":"Kontaktieren Sie den Vertrieb","en":"Contact sales","es":"Contactar con ventas","fr":"Contacter le service commercial","hi":"बिक्री से संपर्क करें","id":"Hubungi penjualan","pt-BR":"Entre em contato com vendas","ru":"Контактный отдел продаж","ur":"سیلز سے رابطہ کریں۔","zh-CN":"联系销售人员"};

export function settings_exports_request(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
