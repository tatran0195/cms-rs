import { getLocale } from '../runtime.js';

const translations = {"ar":"وضع التعليق","bn":"মন্তব্য করছেন","de":"Kommentieren","en":"Commenting","es":"Comentando","fr":"Commentaire","hi":"टिप्पणी कर रहे हैं","id":"Mengomentari","pt-BR":"Comentando","ru":"Комментирование","ur":"تبصرہ کرنا","zh-CN":"评论"};

export function editor_comments_commenting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
