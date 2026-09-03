import { getLocale } from '../runtime.js';

const translations = {"ar":"جدول","bn":"টেবিল","de":"Tisch","en":"Table","es":"mesa","fr":"Tableau","hi":"टेबल","id":"Tabel","pt-BR":"Mesa","ru":"Таблица","ur":"میز","zh-CN":"表"};

export function editor_slash_table_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
