import { getLocale } from '../runtime.js';

const translations = {"ar":"الحدود","bn":"বর্ডার","de":"Grenze","en":"Border","es":"Borde","fr":"Bordure","hi":"सीमा","id":"Perbatasan","pt-BR":"Fronteira","ru":"Граница","ur":"بارڈر","zh-CN":"边框"};

export function settings_theme_color_border(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
