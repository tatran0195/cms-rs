import { getLocale } from '../runtime.js';

const translations = {"ar":"معدّل","bn":"সম্পাদিত","de":"Bearbeitet","en":"Edited","es":"Editado","fr":"Modifié","hi":"संपादित","id":"Diedit","pt-BR":"Editado","ru":"Отредактировано","ur":"ترمیم شدہ","zh-CN":"已编辑"};

export function publish_modified(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
