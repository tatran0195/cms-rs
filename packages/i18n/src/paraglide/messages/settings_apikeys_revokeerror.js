import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إلغاء مفتاح API","bn":"API কী প্রত্যাহার করা যায়নি","de":"Der Schlüssel API konnte nicht widerrufen werden","en":"Could not revoke the API key","es":"No se pudo revocar la clave API","fr":"Impossible de révoquer la clé API","hi":"API कुंजी को रद्द नहीं किया जा सका","id":"Tidak dapat mencabut kunci API","pt-BR":"Não foi possível revogar a chave API","ru":"Не удалось отозвать ключ API.","ur":"API کلید کو منسوخ نہیں کیا جا سکا","zh-CN":"无法撤销 API 密钥"};

export function settings_apikeys_revokeerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
