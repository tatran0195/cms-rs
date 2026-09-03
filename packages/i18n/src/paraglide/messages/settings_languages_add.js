import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة لغة","bn":"ভাষা যোগ করুন","de":"Sprache hinzufügen","en":"Add language","es":"Agregar idioma","fr":"Ajouter une langue","hi":"भाषा जोड़ें","id":"Tambahkan bahasa","pt-BR":"Adicionar idioma","ru":"Добавить язык","ur":"زبان شامل کریں۔","zh-CN":"添加语言"};

export function settings_languages_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
