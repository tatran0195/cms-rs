import { getLocale } from '../runtime.js';

const translations = {"ar":"إغلاق","bn":"খারিজ","de":"Entlassen","en":"Dismiss","es":"Descartar","fr":"Rejeter","hi":"ख़ारिज करें","id":"Singkirkan","pt-BR":"Dispensar","ru":"Уволить","ur":"برطرف کرنا","zh-CN":"解雇"};

export function settings_members_dismiss(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
