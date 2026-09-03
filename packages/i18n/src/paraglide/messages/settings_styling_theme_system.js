import { getLocale } from '../runtime.js';

const translations = {"ar":"النظام","bn":"সিস্টেম","de":"System","en":"System","es":"Sistema","fr":"Système","hi":"सिस्टम","id":"Sistem","pt-BR":"Sistema","ru":"Система","ur":"سسٹم","zh-CN":"系统"};

export function settings_styling_theme_system(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
