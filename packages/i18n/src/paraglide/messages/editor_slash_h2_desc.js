import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان قسم متوسط.","bn":"মাঝারি বিভাগের শিরোনাম।","de":"Überschrift des mittleren Abschnitts.","en":"Medium section heading.","es":"Encabezado de sección media.","fr":"Titre de la section moyenne.","hi":"मध्यम अनुभाग शीर्षक.","id":"Judul bagian sedang.","pt-BR":"Título da seção média.","ru":"Средний заголовок раздела.","ur":"درمیانے حصے کی سرخی","zh-CN":"中节标题。"};

export function editor_slash_h2_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
