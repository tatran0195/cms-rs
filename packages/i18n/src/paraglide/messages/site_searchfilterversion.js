import { getLocale } from '../runtime.js';

const translations = {"ar":"إصدار النتائج","bn":"Result version","de":"Result version","en":"Result version","es":"Result version","fr":"Result version","hi":"Result version","id":"Result version","pt-BR":"Result version","ru":"Result version","ur":"Result version","zh-CN":"Result version"};

export function site_searchfilterversion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
