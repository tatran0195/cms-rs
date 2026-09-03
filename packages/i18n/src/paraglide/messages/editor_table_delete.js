import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف الجدول","bn":"টেবিল মুছুন","de":"Tabelle löschen","en":"Delete table","es":"Eliminar tabla","fr":"Supprimer le tableau","hi":"तालिका हटाएँ","id":"Hapus tabel","pt-BR":"Excluir tabela","ru":"Удалить таблицу","ur":"ٹیبل کو حذف کریں۔","zh-CN":"删除表"};

export function editor_table_delete(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
