import { getLocale } from '../runtime.js';

const translations = {"ar":"الألوان الدلالية","bn":"শব্দার্থিক রং","de":"Semantische Farben","en":"Semantic colors","es":"Colores semánticos","fr":"Couleurs sémantiques","hi":"अर्थपूर्ण रंग","id":"Warna semantik","pt-BR":"Cores semânticas","ru":"Семантические цвета","ur":"معنوی رنگ","zh-CN":"语义色彩"};

export function settings_theme_colors(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
