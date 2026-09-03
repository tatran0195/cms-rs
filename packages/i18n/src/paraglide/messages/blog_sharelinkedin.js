import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاركة على LinkedIn","bn":"Share on LinkedIn","de":"Share on LinkedIn","en":"Share on LinkedIn","es":"Share on LinkedIn","fr":"Share on LinkedIn","hi":"Share on LinkedIn","id":"Share on LinkedIn","pt-BR":"Share on LinkedIn","ru":"Share on LinkedIn","ur":"Share on LinkedIn","zh-CN":"Share on LinkedIn"};

export function blog_sharelinkedin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
