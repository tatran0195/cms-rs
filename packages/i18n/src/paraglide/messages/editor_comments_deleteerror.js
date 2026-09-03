import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر الحذف.","bn":"মুছতে পারেনি।","de":"Konnte nicht gelöscht werden.","en":"Could not delete.","es":"No se pudo eliminar.","fr":"Impossible de supprimer.","hi":"मिटाया नहीं जा सका.","id":"Tidak dapat menghapus.","pt-BR":"Não foi possível excluir.","ru":"Не удалось удалить.","ur":"حذف نہیں ہو سکا۔","zh-CN":"无法删除。"};

export function editor_comments_deleteerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
