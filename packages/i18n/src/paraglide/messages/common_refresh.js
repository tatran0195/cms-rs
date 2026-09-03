import { getLocale } from '../runtime.js';

const translations = {"ar":"تحديث","bn":"রিফ্রেশ","de":"Aktualisieren","en":"Refresh","es":"Actualizar","fr":"Actualiser","hi":"ताज़ा करें","id":"Segarkan","pt-BR":"Atualizar","ru":"Обновить","ur":"ریفریش کریں۔","zh-CN":"刷新"};

export function common_refresh(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
