import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد تعليقات بعد.","bn":"এখনো কোন মন্তব্য নেই.","de":"Noch keine Kommentare.","en":"No comments yet.","es":"Aún no hay comentarios.","fr":"Pas encore de commentaires.","hi":"अभी तक कोई टिप्पणी नहीं.","id":"Belum ada komentar.","pt-BR":"Nenhum comentário ainda.","ru":"Комментариев пока нет.","ur":"ابھی تک کوئی تبصرہ نہیں","zh-CN":"还没有评论。"};

export function editor_nocomments(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
