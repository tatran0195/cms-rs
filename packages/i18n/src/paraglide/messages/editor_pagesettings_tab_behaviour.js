import { getLocale } from '../runtime.js';

const translations = {"ar":"السلوك","bn":"আচরণ","de":"Verhalten","en":"Behaviour","es":"Comportamiento","fr":"Comportement","hi":"व्यवहार","id":"Perilaku","pt-BR":"Comportamento","ru":"Поведение","ur":"رویہ","zh-CN":"行为"};

export function editor_pagesettings_tab_behaviour(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
