import { getLocale } from '../runtime.js';

const translations = {"ar":"النص الأساسي","bn":"ফোরগ্রাউন্ড","de":"Vordergrund","en":"Foreground","es":"Texto principal","fr":"Premier plan","hi":"अग्रभूमि","id":"Latar depan","pt-BR":"Primeiro plano","ru":"передний план","ur":"پیش منظر","zh-CN":"前景"};

export function settings_theme_color_foreground(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
