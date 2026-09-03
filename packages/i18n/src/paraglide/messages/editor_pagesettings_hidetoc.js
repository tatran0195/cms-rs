import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء «في هذه الصفحة»","bn":"\"এই পৃষ্ঠায়\" লুকান","de":"„Auf dieser Seite“ ausblenden","en":"Hide “On this page”","es":"Ocultar “En esta página”","fr":"Masquer « Sur cette page »","hi":"\"इस पृष्ठ पर\" छिपाएँ","id":"Sembunyikan “Di halaman ini”","pt-BR":"Ocultar “Nesta página”","ru":"Скрыть «На этой странице»","ur":"\"اس صفحہ پر\" چھپائیں","zh-CN":"隐藏“在此页上”"};

export function editor_pagesettings_hidetoc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
