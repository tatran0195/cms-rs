import { getLocale } from '../runtime.js';

const translations = {"ar":"خط العناوين","bn":"শিরোনাম ফন্ট","de":"Schriftart der Überschrift","en":"Heading font","es":"fuente de encabezado","fr":"Police de titre","hi":"शीर्षक फ़ॉन्ट","id":"Font judul","pt-BR":"Fonte do título","ru":"Шрифт заголовка","ur":"سرخی والا فونٹ","zh-CN":"标题字体"};

export function settings_typography_headingfont_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
