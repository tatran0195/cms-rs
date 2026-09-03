import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتب تعليقًا…","bn":"একটি মন্তব্য করুন…","de":"Hinterlasse einen Kommentar…","en":"Leave a comment…","es":"Deja un comentario…","fr":"Laisser un commentaire…","hi":"एक टिप्पणी छोड़ें...","id":"Tinggalkan komentar…","pt-BR":"Deixe um comentário…","ru":"Оставить комментарий…","ur":"ایک تبصرہ چھوڑیں…","zh-CN":"发表评论..."};

export function editor_leavecomment(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
