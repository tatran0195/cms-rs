import { getLocale } from '../runtime.js';

const translations = {"ar":"مجموعة روابط لمتابعة القراءة.","bn":"A group of links for continued reading.","de":"A group of links for continued reading.","en":"A group of links for continued reading.","es":"A group of links for continued reading.","fr":"A group of links for continued reading.","hi":"A group of links for continued reading.","id":"A group of links for continued reading.","pt-BR":"A group of links for continued reading.","ru":"A group of links for continued reading.","ur":"A group of links for continued reading.","zh-CN":"A group of links for continued reading."};

export function editor_slash_relatedcontent_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
