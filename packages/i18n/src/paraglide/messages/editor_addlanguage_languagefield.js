import { getLocale } from '../runtime.js';

const translations = {"ar":"اللغة","bn":"ভাষা","de":"Sprache","en":"Language","es":"Idioma","fr":"Langue","hi":"भाषा","id":"Bahasa","pt-BR":"Idioma","ru":"Язык","ur":"زبان","zh-CN":"语言"};

export function editor_addlanguage_languagefield(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
