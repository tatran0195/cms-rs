import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان 3","bn":"শিরোনাম 3","de":"Überschrift 3","en":"Heading 3","es":"Título 3","fr":"Titre 3","hi":"शीर्षक 3","id":"Pos 3","pt-BR":"Título 3","ru":"Заголовок 3","ur":"سرخی 3","zh-CN":"标题 3"};

export function editor_slash_h3_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
