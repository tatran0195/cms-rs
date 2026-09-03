import { getLocale } from '../runtime.js';

const translations = {"ar":"النص الثانوي","bn":"নিঃশব্দ পাঠ্য","de":"Stummgeschalteter Text","en":"Muted text","es":"Texto secundario","fr":"Texte secondaire","hi":"म्यूट किया गया पाठ","id":"Teks dibungkam","pt-BR":"Texto silenciado","ru":"Приглушенный текст","ur":"خاموش متن","zh-CN":"静音文本"};

export function settings_theme_color_mutedforeground(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
