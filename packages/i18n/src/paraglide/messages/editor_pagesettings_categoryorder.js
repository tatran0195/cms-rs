import { getLocale } from '../runtime.js';

const translations = {"ar":"الترتيب","bn":"অর্ডার","de":"Bestellen","en":"Order","es":"Orden","fr":"Commande","hi":"आदेश","id":"Memesan","pt-BR":"Pedido","ru":"Заказать","ur":"آرڈر","zh-CN":"订单"};

export function editor_pagesettings_categoryorder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
