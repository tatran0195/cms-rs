import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء","bn":"তৈরি করুন","de":"Generieren","en":"Generate","es":"generar","fr":"Générer","hi":"उत्पन्न करें","id":"Hasilkan","pt-BR":"Gerar","ru":"Генерировать","ur":"پیدا کریں۔","zh-CN":"生成"};

export function editor_ai_generate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
