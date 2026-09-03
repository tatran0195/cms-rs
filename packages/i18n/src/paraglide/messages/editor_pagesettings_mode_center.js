import { getLocale } from '../runtime.js';

const translations = {"ar":"موسّط (ضيّق، بدون محتويات)","bn":"কেন্দ্রীভূত (সংকীর্ণ, কোন বিষয়বস্তু নেই)","de":"Zentriert (eng, kein Inhalt)","en":"Centered (narrow, no contents)","es":"Centrado (estrecho, sin contenido)","fr":"Centré (étroit, sans contenu)","hi":"केन्द्रित (संकीर्ण, कोई सामग्री नहीं)","id":"Tengah (sempit, tidak ada isi)","pt-BR":"Centralizado (estreito, sem conteúdo)","ru":"По центру (узкий, без содержимого)","ur":"مرکز (تنگ، کوئی مواد نہیں)","zh-CN":"居中（狭窄，无内容）"};

export function editor_pagesettings_mode_center(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
