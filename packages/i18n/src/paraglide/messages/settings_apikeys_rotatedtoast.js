import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تدوير مفتاح API","bn":"API কী রোটেট করা হয়েছে","de":"API-Schlüssel rotiert","en":"API key rotated","es":"Clave API rotada","fr":"Clé API renouvelée","hi":"API कुंजी रोटेट की गई","id":"Kunci API dirotasi","pt-BR":"Chave de API rotacionada","ru":"Ключ API сменён","ur":"API کلید تبدیل کر دی گئی","zh-CN":"API 密钥已轮换"};

export function settings_apikeys_rotatedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
