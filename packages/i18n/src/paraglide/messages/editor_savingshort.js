import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الحفظ","bn":"সংরক্ষণ","de":"Sparen","en":"Saving","es":"Ahorro","fr":"Économiser","hi":"सहेजा जा रहा है","id":"Menyimpan","pt-BR":"Salvando","ru":"Сохранение","ur":"محفوظ کرنا","zh-CN":"节省"};

export function editor_savingshort(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
