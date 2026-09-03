import { getLocale } from '../runtime.js';

const translations = {"ar":"تم الحفظ","bn":"সংরক্ষিত","de":"Gespeichert","en":"Saved","es":"Guardado","fr":"Enregistré","hi":"सहेजा गया","id":"Disimpan","pt-BR":"Salvo","ru":"Сохранено","ur":"محفوظ کیا گیا۔","zh-CN":"已保存"};

export function editor_savedshort(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
