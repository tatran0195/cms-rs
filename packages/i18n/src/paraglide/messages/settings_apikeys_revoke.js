import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء","bn":"প্রত্যাহার করুন","de":"Widerrufen","en":"Revoke","es":"Revocar","fr":"Révoquer","hi":"निरस्त करें","id":"Cabut","pt-BR":"Revogar","ru":"Отозвать","ur":"منسوخ کرنا","zh-CN":"撤销"};

export function settings_apikeys_revoke(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
