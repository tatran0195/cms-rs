import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحات","bn":"Pages","de":"Pages","en":"Pages","es":"Pages","fr":"Pages","hi":"Pages","id":"Pages","pt-BR":"Pages","ru":"Pages","ur":"Pages","zh-CN":"Pages"};

export function site_importpages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
