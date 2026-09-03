import { getLocale } from '../runtime.js';

const translations = {"ar":"نص سفلي","bn":"সাবস্ক্রিপ্ট","de":"Tiefgestellt","en":"Subscript","es":"Subíndice","fr":"Indice","hi":"सबस्क्रिप्ट","id":"Berlangganan","pt-BR":"Assinatura","ru":"Индекс","ur":"سبسکرپٹ","zh-CN":"下标"};

export function editor_format_subscript(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
