import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّرت إضافة اللغة.","bn":"ভাষা যোগ করা যায়নি.","de":"Die Sprache konnte nicht hinzugefügt werden.","en":"Could not add the language.","es":"No se pudo agregar el idioma.","fr":"Impossible d'ajouter la langue.","hi":"भाषा नहीं जोड़ी जा सकी.","id":"Tidak dapat menambahkan bahasa.","pt-BR":"Não foi possível adicionar o idioma.","ru":"Не удалось добавить язык.","ur":"زبان شامل نہیں ہو سکی۔","zh-CN":"无法添加语言。"};

export function editor_addlanguage_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
