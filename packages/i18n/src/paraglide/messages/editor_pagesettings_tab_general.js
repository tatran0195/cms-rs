import { getLocale } from '../runtime.js';

const translations = {"ar":"عام","bn":"সাধারণ","de":"Allgemein","en":"General","es":"generales","fr":"Général","hi":"सामान्य","id":"Umum","pt-BR":"Geral","ru":"Общий","ur":"جنرل","zh-CN":"一般"};

export function editor_pagesettings_tab_general(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
