import { getLocale } from '../runtime.js';

const translations = {"ar":"تصنيف الشريط الجانبي","bn":"সাইডবার বিভাগ","de":"Kategorie der Seitenleiste","en":"Sidebar category","es":"Categoría de la barra lateral","fr":"Catégorie de la barre latérale","hi":"साइडबार श्रेणी","id":"Kategori bilah sisi","pt-BR":"Categoria da barra lateral","ru":"Категория боковой панели","ur":"سائڈبار زمرہ","zh-CN":"侧边栏类别"};

export function editor_pagesettings_category(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
