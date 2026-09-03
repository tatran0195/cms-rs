import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر لغة","bn":"একটি ভাষা নির্বাচন করুন","de":"Wählen Sie eine Sprache aus","en":"Select a language","es":"Seleccione un idioma","fr":"Sélectionnez une langue","hi":"एक भाषा चुनें","id":"Pilih bahasa","pt-BR":"Selecione um idioma","ru":"Выберите язык","ur":"ایک زبان منتخب کریں۔","zh-CN":"选择语言"};

export function editor_addlanguage_required(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
