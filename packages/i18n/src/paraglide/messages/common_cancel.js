import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء","bn":"বাতিল করুন","de":"Abbrechen","en":"Cancel","es":"Cancelar","fr":"Annuler","hi":"रद्द करें","id":"Batalkan","pt-BR":"Cancelar","ru":"Отмена","ur":"منسوخ کریں۔","zh-CN":"取消"};

export function common_cancel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
