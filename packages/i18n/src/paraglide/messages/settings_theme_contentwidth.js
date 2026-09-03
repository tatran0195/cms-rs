import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض المحتوى","bn":"বিষয়বস্তুর প্রস্থ","de":"Inhaltsbreite","en":"Content width","es":"Ancho del contenido","fr":"Largeur du contenu","hi":"सामग्री की चौड़ाई","id":"Lebar konten","pt-BR":"Largura do conteúdo","ru":"Ширина контента","ur":"مواد کی چوڑائی","zh-CN":"内容宽度"};

export function settings_theme_contentwidth(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
