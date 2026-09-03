import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاركة على X","bn":"Share on X","de":"Share on X","en":"Share on X","es":"Share on X","fr":"Share on X","hi":"Share on X","id":"Share on X","pt-BR":"Share on X","ru":"Share on X","ur":"Share on X","zh-CN":"Share on X"};

export function blog_sharex(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
