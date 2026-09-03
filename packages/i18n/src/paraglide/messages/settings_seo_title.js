import { getLocale } from '../runtime.js';

const translations = {"ar":"تحسين محركات البحث","bn":"SEO","de":"SEO","en":"SEO","es":"SEO","fr":"SEO","hi":"SEO","id":"SEO","pt-BR":"SEO","ru":"SEO","ur":"SEO","zh-CN":"SEO"};

export function settings_seo_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
