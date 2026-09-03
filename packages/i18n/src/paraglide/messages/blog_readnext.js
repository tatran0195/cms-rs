import { getLocale } from '../runtime.js';

const translations = {"ar":"اقرأ أيضًا","bn":"Read next","de":"Read next","en":"Read next","es":"Read next","fr":"Read next","hi":"Read next","id":"Read next","pt-BR":"Read next","ru":"Read next","ur":"Read next","zh-CN":"Read next"};

export function blog_readnext(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
