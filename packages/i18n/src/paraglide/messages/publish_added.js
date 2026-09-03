import { getLocale } from '../runtime.js';

const translations = {"ar":"جديد","bn":"নতুন","de":"Neu","en":"New","es":"Nuevo","fr":"Nouveau","hi":"नया","id":"Baru","pt-BR":"Novo","ru":"Новый","ur":"نیا","zh-CN":"新"};

export function publish_added(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
