import { getLocale } from '../runtime.js';

const translations = {"ar":"مفتاح API","bn":"API কী","de":"API Schlüssel","en":"API key","es":"Clave API","fr":"Clé API","hi":"एपीआई कुंजी","id":"Kunci API","pt-BR":"Chave da API","ru":"Ключ API","ur":"API کلید","zh-CN":"API 密钥"};

export function settings_integrations_zapier_apikey(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
