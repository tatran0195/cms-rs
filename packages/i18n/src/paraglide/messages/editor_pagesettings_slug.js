import { getLocale } from '../runtime.js';

const translations = {"ar":"المُعرّف","bn":"স্লাগ","de":"Schnecke","en":"Slug","es":"babosa","fr":"Limace","hi":"स्लग","id":"Slug URL","pt-BR":"Lesma","ru":"Слизень","ur":"سلگ","zh-CN":"URL slug"};

export function editor_pagesettings_slug(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
