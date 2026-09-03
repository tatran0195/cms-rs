import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف التعليق","bn":"মন্তব্য মুছুন","de":"Kommentar löschen","en":"Delete comment","es":"Eliminar comentario","fr":"Supprimer le commentaire","hi":"टिप्पणी हटाएँ","id":"Hapus komentar","pt-BR":"Excluir comentário","ru":"Удалить комментарий","ur":"تبصرہ حذف کریں۔","zh-CN":"删除评论"};

export function editor_comments_deletearia(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
