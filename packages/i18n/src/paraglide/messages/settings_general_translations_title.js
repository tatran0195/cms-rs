import { getLocale } from '../runtime.js';

const translations = {"ar":"الترجمات","bn":"অনুবাদ","de":"Übersetzungen","en":"Translations","es":"Traducciones","fr":"Traductions","hi":"अनुवाद","id":"Terjemahan","pt-BR":"Traduções","ru":"Переводы","ur":"ترجمے","zh-CN":"翻译"};

export function settings_general_translations_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
