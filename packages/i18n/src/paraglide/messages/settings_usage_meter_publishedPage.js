import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحات المنشورة","bn":"Published pages","de":"Published pages","en":"Published pages","es":"Published pages","fr":"Published pages","hi":"Published pages","id":"Published pages","pt-BR":"Published pages","ru":"Published pages","ur":"Published pages","zh-CN":"Published pages"};

export function settings_usage_meter_publishedPage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
