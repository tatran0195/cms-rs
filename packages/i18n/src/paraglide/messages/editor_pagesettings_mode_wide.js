import { getLocale } from '../runtime.js';

const translations = {"ar":"عريض (عرض كامل، بدون محتويات)","bn":"প্রশস্ত (সম্পূর্ণ প্রস্থ, কোন বিষয়বস্তু নেই)","de":"Wide (volle Breite, kein Inhalt)","en":"Wide (full width, no contents)","es":"Ancho (ancho completo, sin contenido)","fr":"Large (pleine largeur, pas de contenu)","hi":"चौड़ा (पूरी चौड़ाई, कोई सामग्री नहीं)","id":"Lebar (lebar penuh, tanpa isi)","pt-BR":"Largo (largura total, sem conteúdo)","ru":"Широкий (во всю ширину, без содержимого)","ur":"چوڑا (مکمل چوڑائی، کوئی مواد نہیں)","zh-CN":"宽（全宽，无内容）"};

export function editor_pagesettings_mode_wide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
