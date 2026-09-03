import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان قسم كبير.","bn":"বড় অধ্যায় শিরোনাম.","de":"Große Abschnittsüberschrift.","en":"Large section heading.","es":"Encabezado de sección grande.","fr":"Titre de grande section.","hi":"बड़े अनुभाग का शीर्षक.","id":"Judul bagian besar.","pt-BR":"Título de seção grande.","ru":"Большой заголовок раздела.","ur":"بڑے حصے کی سرخی","zh-CN":"大节标题。"};

export function editor_slash_h1_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
