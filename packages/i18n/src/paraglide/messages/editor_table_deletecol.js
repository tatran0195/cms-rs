import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف العمود","bn":"কলাম মুছুন","de":"Spalte löschen","en":"Delete column","es":"Eliminar columna","fr":"Supprimer la colonne","hi":"कॉलम हटाएँ","id":"Hapus kolom","pt-BR":"Excluir coluna","ru":"Удалить столбец","ur":"کالم حذف کریں۔","zh-CN":"删除列"};

export function editor_table_deletecol(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
