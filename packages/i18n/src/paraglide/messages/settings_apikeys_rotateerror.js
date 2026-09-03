import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تدوير مفتاح API","bn":"API কী রোটেট করা যায়নি","de":"Der API-Schlüssel konnte nicht rotiert werden","en":"Could not rotate the API key","es":"No se pudo rotar la clave API","fr":"Impossible de renouveler la clé API","hi":"API कुंजी रोटेट नहीं की जा सकी","id":"Tidak dapat merotasi kunci API","pt-BR":"Não foi possível rotacionar a chave de API","ru":"Не удалось сменить ключ API","ur":"API کلید تبدیل نہیں کی جا سکی","zh-CN":"无法轮换 API 密钥"};

export function settings_apikeys_rotateerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
