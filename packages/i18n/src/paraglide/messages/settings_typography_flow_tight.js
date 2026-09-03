import { getLocale } from '../runtime.js';

const translations = {"ar":"ضيّق","bn":"টাইট","de":"Eng","en":"Tight","es":"apretado","fr":"Serré","hi":"तंग","id":"Ketat","pt-BR":"Apertado","ru":"Плотный","ur":"تنگ","zh-CN":"紧"};

export function settings_typography_flow_tight(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
