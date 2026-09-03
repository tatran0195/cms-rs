import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر نشر التعليق.","bn":"মন্তব্য পোস্ট করা যায়নি.","de":"Der Kommentar konnte nicht gepostet werden.","en":"Could not post the comment.","es":"No se pudo publicar el comentario.","fr":"Impossible de publier le commentaire.","hi":"टिप्पणी पोस्ट नहीं कर सका.","id":"Tidak dapat mengirimkan komentar.","pt-BR":"Não foi possível postar o comentário.","ru":"Не удалось опубликовать комментарий.","ur":"تبصرہ پوسٹ نہیں کر سکا۔","zh-CN":"无法发表评论。"};

export function editor_comments_posterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
