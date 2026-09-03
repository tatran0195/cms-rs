import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ إنشاء مخطط تفصيلي…","bn":"একটি রূপরেখা তৈরি করা হচ্ছে...","de":"Erstellen einer Gliederung…","en":"Building an outline…","es":"Construyendo un esquema…","fr":"Construire un aperçu…","hi":"एक रूपरेखा तैयार करना...","id":"Membangun garis besar…","pt-BR":"Construindo um esboço…","ru":"Построение контура…","ur":"ایک خاکہ بنا رہا ہے…","zh-CN":"制定大纲……"};

export function editor_ai_outlining(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
