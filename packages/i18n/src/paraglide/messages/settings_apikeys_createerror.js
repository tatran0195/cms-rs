import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إنشاء مفتاح API","bn":"API কী তৈরি করা যায়নি","de":"Der Schlüssel API konnte nicht erstellt werden","en":"Could not create the API key","es":"No se pudo crear la clave API","fr":"Impossible de créer la clé API","hi":"API कुंजी नहीं बनाई जा सकी","id":"Tidak dapat membuat kunci API","pt-BR":"Não foi possível criar a chave API","ru":"Не удалось создать ключ API.","ur":"API کلید نہیں بن سکی","zh-CN":"无法创建 API 密钥"};

export function settings_apikeys_createerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
