import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حفظ اللغة","bn":"ভাষা বাঁচাতে পারেনি","de":"Die Sprache konnte nicht gespeichert werden","en":"Could not save the language","es":"No se pudo guardar el idioma","fr":"Impossible d'enregistrer la langue","hi":"भाषा को सहेजा नहीं जा सका","id":"Tidak dapat menyimpan bahasa","pt-BR":"Não foi possível salvar o idioma","ru":"Не удалось сохранить язык","ur":"زبان محفوظ نہ ہو سکی","zh-CN":"无法保存语言"};

export function editor_langsettings_saveerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
