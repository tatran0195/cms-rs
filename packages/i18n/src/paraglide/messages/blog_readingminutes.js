import { getLocale } from '../runtime.js';

const translations = {"ar":"{minutes} دقائق قراءة","bn":"{minutes} min read","de":"{minutes} min read","en":"{minutes} min read","es":"{minutes} min read","fr":"{minutes} min read","hi":"{minutes} min read","id":"{minutes} min read","pt-BR":"{minutes} min read","ru":"{minutes} min read","ur":"{minutes} min read","zh-CN":"{minutes} min read"};

export function blog_readingminutes(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
