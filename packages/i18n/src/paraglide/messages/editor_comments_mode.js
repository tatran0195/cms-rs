import { getLocale } from '../runtime.js';

const translations = {"ar":"تعليق","bn":"মন্তব্য করুন","de":"Kommentar","en":"Comment","es":"Comentario","fr":"Commentaire","hi":"टिप्पणी करें","id":"Komentar","pt-BR":"Comentário","ru":"Комментарий","ur":"تبصرہ","zh-CN":"评论"};

export function editor_comments_mode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
