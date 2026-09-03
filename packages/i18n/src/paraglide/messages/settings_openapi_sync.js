import { getLocale } from '../runtime.js';

const translations = {"ar":"تحديث المصدر","bn":"রিফ্রেশ উৎস","de":"Quelle aktualisieren","en":"Refresh source","es":"Actualizar fuente","fr":"Actualiser la source","hi":"स्रोत ताज़ा करें","id":"Segarkan sumber","pt-BR":"Atualizar fonte","ru":"Обновить источник","ur":"ماخذ کو ریفریش کریں۔","zh-CN":"刷新源"};

export function settings_openapi_sync(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
