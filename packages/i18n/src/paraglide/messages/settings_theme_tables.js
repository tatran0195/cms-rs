import { getLocale } from '../runtime.js';

const translations = {"ar":"الجداول","bn":"টেবিল","de":"Tische","en":"Tables","es":"Tablas","fr":"Tableaux","hi":"टेबल्स","id":"Tabel","pt-BR":"Tabelas","ru":"Таблицы","ur":"میزیں","zh-CN":"表格"};

export function settings_theme_tables(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
