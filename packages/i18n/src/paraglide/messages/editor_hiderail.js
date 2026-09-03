import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء الذكاء الاصطناعي والتعليقات","bn":"AI এবং মন্তব্য লুকান","de":"KI und Kommentare ausblenden","en":"Hide AI & comments","es":"Ocultar IA y comentarios","fr":"Masquer l'IA et les commentaires","hi":"एआई और टिप्पणियाँ छिपाएँ","id":"Sembunyikan AI & komentar","pt-BR":"Ocultar IA e comentários","ru":"Скрыть AI и комментарии","ur":"AI اور تبصرے چھپائیں۔","zh-CN":"隐藏人工智能和评论"};

export function editor_hiderail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
