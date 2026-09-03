import { getLocale } from '../runtime.js';

const translations = {"ar":"الخلفية","bn":"ক্যানভাস","de":"Leinwand","en":"Canvas","es":"Lienzo","fr":"Toile","hi":"कैनवास","id":"Kanvas","pt-BR":"Tela","ru":"Холст","ur":"کینوس","zh-CN":"帆布"};

export function settings_theme_color_canvas(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
