import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان 2","bn":"শিরোনাম 2","de":"Überschrift 2","en":"Heading 2","es":"Título 2","fr":"Titre 2","hi":"शीर्षक 2","id":"Judul 2","pt-BR":"Título 2","ru":"Заголовок 2","ur":"سرخی 2","zh-CN":"标题 2"};

export function editor_slash_h2_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
