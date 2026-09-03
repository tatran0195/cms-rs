import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان 1","bn":"শিরোনাম 1","de":"Überschrift 1","en":"Heading 1","es":"Título 1","fr":"Titre 1","hi":"शीर्षक 1","id":"Judul 1","pt-BR":"Título 1","ru":"Заголовок 1","ur":"سرخی 1","zh-CN":"标题 1"};

export function editor_slash_h1_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
