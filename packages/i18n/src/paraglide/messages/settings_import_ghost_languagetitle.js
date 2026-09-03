import { getLocale } from '../runtime.js';

const translations = {"ar":"أضف وسم اللغة لكل مقال في Ghost","bn":"প্রতিটি ঘোস্ট নিবন্ধকে এর ভাষা দিয়ে ট্যাগ করুন","de":"Kennzeichnen Sie jeden Ghost-Artikel mit seiner Sprache","en":"Tag every Ghost article with its language","es":"Etiqueta cada artículo de Ghost con su idioma","fr":"Marquez chaque article Ghost avec sa langue","hi":"प्रत्येक भूत लेख को उसकी भाषा के साथ टैग करें","id":"Tandai setiap artikel Ghost dengan bahasanya","pt-BR":"Marque cada artigo do Ghost com seu idioma","ru":"Отмечайте каждую статью о Ghost своим языком","ur":"ہر گھوسٹ آرٹیکل کو اس کی زبان کے ساتھ ٹیگ کریں۔","zh-CN":"用语言标记每篇 Ghost 文章"};

export function settings_import_ghost_languagetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
