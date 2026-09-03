import { getLocale } from '../runtime.js';

const translations = {"ar":"داكن","bn":"অন্ধকার","de":"Dunkel","en":"Dark","es":"oscuro","fr":"Sombre","hi":"अंधेरा","id":"Gelap","pt-BR":"Escuro","ru":"Темный","ur":"اندھیرا","zh-CN":"黑暗"};

export function settings_styling_theme_dark(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
