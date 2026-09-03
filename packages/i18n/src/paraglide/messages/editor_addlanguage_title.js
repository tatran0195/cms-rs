import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة لغة","bn":"একটি ভাষা যোগ করুন","de":"Fügen Sie eine Sprache hinzu","en":"Add a language","es":"Agregar un idioma","fr":"Ajouter une langue","hi":"एक भाषा जोड़ें","id":"Tambahkan bahasa","pt-BR":"Adicionar um idioma","ru":"Добавить язык","ur":"ایک زبان شامل کریں۔","zh-CN":"添加语言"};

export function editor_addlanguage_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
