import { getLocale } from '../runtime.js';

const translations = {"ar":"الرأس","bn":"হেডার","de":"Kopfzeile","en":"Header","es":"encabezado","fr":"En-tête","hi":"शीर्ष लेख","id":"Tajuk","pt-BR":"Cabeçalho","ru":"Заголовок","ur":"ہیڈر","zh-CN":"标头"};

export function settings_theme_header(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
