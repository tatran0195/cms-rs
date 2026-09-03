import { getLocale } from '../runtime.js';

const translations = {"ar":"افتراضي (مع جدول المحتويات)","bn":"ডিফল্ট (বিষয় সারণী সহ)","de":"Standard (mit Inhaltsverzeichnis)","en":"Default (with table of contents)","es":"Predeterminado (con índice)","fr":"Par défaut (avec table des matières)","hi":"डिफ़ॉल्ट (सामग्री की तालिका के साथ)","id":"Default (dengan daftar isi)","pt-BR":"Padrão (com índice)","ru":"По умолчанию (с оглавлением)","ur":"پہلے سے طے شدہ (مشمولات کے جدول کے ساتھ)","zh-CN":"默认（带目录）"};

export function editor_pagesettings_mode_default(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
