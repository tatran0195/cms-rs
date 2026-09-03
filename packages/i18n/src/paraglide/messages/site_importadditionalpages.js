import { getLocale } from '../runtime.js';

const translations = {"ar":"صفحات إضافية","bn":"Additional pages","de":"Additional pages","en":"Additional pages","es":"Additional pages","fr":"Additional pages","hi":"Additional pages","id":"Additional pages","pt-BR":"Additional pages","ru":"Additional pages","ur":"Additional pages","zh-CN":"Additional pages"};

export function site_importadditionalpages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
