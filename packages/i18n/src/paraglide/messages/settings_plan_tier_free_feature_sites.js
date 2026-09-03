import { getLocale } from '../runtime.js';

const translations = {"ar":"موقع منشور واحد","bn":"1টি প্রকাশিত সাইট","de":"1 veröffentlichte Website","en":"1 published site","es":"1 sitio publicado","fr":"1 site publié","hi":"1 प्रकाशित साइट","id":"1 situs yang diterbitkan","pt-BR":"1 site publicado","ru":"1 опубликованный сайт","ur":"1 شائع شدہ سائٹ","zh-CN":"1 个已发布网站"};

export function settings_plan_tier_free_feature_sites(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
