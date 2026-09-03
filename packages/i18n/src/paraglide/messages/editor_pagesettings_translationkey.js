import { getLocale } from '../runtime.js';

const translations = {"ar":"مفتاح الترجمة","bn":"অনুবাদ কী","de":"Übersetzungsschlüssel","en":"Translation key","es":"Clave de traducción","fr":"Clé de traduction","hi":"अनुवाद कुंजी","id":"Kunci terjemahan","pt-BR":"Chave de tradução","ru":"Ключ перевода","ur":"ترجمے کی کلید","zh-CN":"翻译键"};

export function editor_pagesettings_translationkey(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
