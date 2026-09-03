import { getLocale } from '../runtime.js';

const translations = {"ar":"Typesense","bn":"টাইপসেন্স","de":"Schriftsinn","en":"Typesense","es":"Sentido tipográfico","fr":"Sens de la typographie","hi":"टाइपसेंस","id":"Keahlian mengetik","pt-BR":"Sentido de tipo","ru":"Типсенс","ur":"ٹائپ سینس","zh-CN":"类型感应"};

export function settings_search_provider_typesense(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
