import { getLocale } from '../runtime.js';

const translations = {"ar":"خط النص","bn":"বডি ফন্ট","de":"Körperschrift","en":"Body font","es":"fuente del cuerpo","fr":"Police du corps","hi":"मुख्य फ़ॉन्ट","id":"Font tubuh","pt-BR":"Fonte do corpo","ru":"Основной шрифт","ur":"باڈی فونٹ","zh-CN":"正文字体"};

export function settings_typography_bodyfont_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
