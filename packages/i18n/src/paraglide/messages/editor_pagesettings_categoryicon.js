import { getLocale } from '../runtime.js';

const translations = {"ar":"أيقونة التصنيف","bn":"বিভাগ আইকন","de":"Kategoriesymbol","en":"Category icon","es":"Icono de categoría","fr":"Icône de catégorie","hi":"श्रेणी चिह्न","id":"Ikon kategori","pt-BR":"Ícone de categoria","ru":"Значок категории","ur":"زمرہ کا آئیکن","zh-CN":"类别图标"};

export function editor_pagesettings_categoryicon(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
