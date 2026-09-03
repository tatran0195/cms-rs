import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف","bn":"মুছুন","de":"Löschen","en":"Delete","es":"Eliminar","fr":"Supprimer","hi":"हटाएँ","id":"Hapus","pt-BR":"Excluir","ru":"Удалить","ur":"حذف کریں۔","zh-CN":"删除"};

export function common_delete(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
