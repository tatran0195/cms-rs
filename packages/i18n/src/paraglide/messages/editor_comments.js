import { getLocale } from '../runtime.js';

const translations = {"ar":"التعليقات","bn":"মন্তব্য","de":"Kommentare","en":"Comments","es":"Comentarios","fr":"Commentaires","hi":"टिप्पणियाँ","id":"Komentar","pt-BR":"Comentários","ru":"Комментарии","ur":"تبصرے","zh-CN":"评论"};

export function editor_comments(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
