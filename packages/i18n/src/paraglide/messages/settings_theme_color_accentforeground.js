import { getLocale } from '../runtime.js';

const translations = {"ar":"نص اللون المميّز","bn":"উচ্চারণ পাঠ্য","de":"Akzenttext","en":"Accent text","es":"Texto acentuado","fr":"Texte accentué","hi":"उच्चारण पाठ","id":"Teks aksen","pt-BR":"Texto de destaque","ru":"Акцентный текст","ur":"لہجہ متن","zh-CN":"强调文字"};

export function settings_theme_color_accentforeground(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
