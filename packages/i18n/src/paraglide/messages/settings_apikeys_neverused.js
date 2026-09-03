import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يُستخدم","bn":"কখনও নয়","de":"Nie","en":"Never","es":"Nunca","fr":"Jamais","hi":"कभी नहीं","id":"Belum pernah","pt-BR":"Nunca","ru":"Никогда","ur":"کبھی نہیں","zh-CN":"从未使用"};

export function settings_apikeys_neverused(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
