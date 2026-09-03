import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة عمود قبل","bn":"আগে কলাম যোগ করুন","de":"Spalte vorher hinzufügen","en":"Add column before","es":"Agregar columna antes","fr":"Ajouter une colonne avant","hi":"पहले कॉलम जोड़ें","id":"Tambahkan kolom sebelumnya","pt-BR":"Adicionar coluna antes","ru":"Добавить столбец раньше","ur":"پہلے کالم شامل کریں۔","zh-CN":"之前添加列"};

export function editor_table_addcolbefore(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
