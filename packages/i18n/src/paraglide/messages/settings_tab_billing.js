import { getLocale } from '../runtime.js';

const translations = {"ar":"الفوترة","bn":"বিলিং","de":"Abrechnung","en":"Billing","es":"Facturación","fr":"Facturation","hi":"बिलिंग","id":"Penagihan","pt-BR":"Faturamento","ru":"Биллинг","ur":"بلنگ","zh-CN":"计费"};

export function settings_tab_billing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
