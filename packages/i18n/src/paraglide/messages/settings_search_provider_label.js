import { getLocale } from '../runtime.js';

const translations = {"ar":"المزوّد","bn":"প্রদানকারী","de":"Anbieter","en":"Provider","es":"Proveedor","fr":"Fournisseur","hi":"प्रदाता","id":"Penyedia","pt-BR":"Provedor","ru":"Поставщик","ur":"فراہم کرنے والا","zh-CN":"提供者"};

export function settings_search_provider_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
