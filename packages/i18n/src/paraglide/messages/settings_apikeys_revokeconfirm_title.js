import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تريد إلغاء مفتاح API؟","bn":"API কী প্রত্যাহার করবেন?","de":"API-Schlüssel widerrufen?","en":"Revoke API key?","es":"¿Revocar la clave API?","fr":"Révoquer la clé API ?","hi":"API कुंजी रद्द करें?","id":"Cabut kunci API?","pt-BR":"Revogar chave de API?","ru":"Отозвать ключ API?","ur":"API کلید منسوخ کریں؟","zh-CN":"撤销 API 密钥？"};

export function settings_apikeys_revokeconfirm_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
