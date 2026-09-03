import { getLocale } from '../runtime.js';

const translations = {"ar":"اللغات","bn":"ভাষা","de":"Sprachen","en":"Languages","es":"Idiomas","fr":"Langues","hi":"भाषाएँ","id":"Bahasa","pt-BR":"Idiomas","ru":"Языки","ur":"زبانیں","zh-CN":"语言"};

export function settings_usage_languages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
