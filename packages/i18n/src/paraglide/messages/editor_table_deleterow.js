import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف الصف","bn":"সারি মুছুন","de":"Zeile löschen","en":"Delete row","es":"Eliminar fila","fr":"Supprimer la ligne","hi":"पंक्ति हटाएँ","id":"Hapus baris","pt-BR":"Excluir linha","ru":"Удалить строку","ur":"قطار کو حذف کریں۔","zh-CN":"删除行"};

export function editor_table_deleterow(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
