import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار الذكاء الاصطناعي والتعليقات","bn":"এআই এবং মন্তব্য দেখান","de":"KI und Kommentare anzeigen","en":"Show AI & comments","es":"Mostrar IA y comentarios","fr":"Afficher l'IA et les commentaires","hi":"एआई और टिप्पणियाँ दिखाएँ","id":"Tampilkan AI & komentar","pt-BR":"Mostrar IA e comentários","ru":"Показать AI и комментарии","ur":"AI اور تبصرے دکھائیں۔","zh-CN":"显示人工智能和评论"};

export function editor_showrail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
