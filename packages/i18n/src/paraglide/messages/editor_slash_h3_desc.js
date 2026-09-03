import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان قسم صغير.","bn":"ছোট অধ্যায় শিরোনাম.","de":"Kleine Abschnittsüberschrift.","en":"Small section heading.","es":"Título de sección pequeña.","fr":"Titre de petite section.","hi":"लघु अनुभाग शीर्षक.","id":"Judul bagian kecil.","pt-BR":"Título de seção pequena.","ru":"Небольшой заголовок раздела.","ur":"چھوٹے حصے کی سرخی","zh-CN":"小节标题。"};

export function editor_slash_h3_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
