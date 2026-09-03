import { getLocale } from '../runtime.js';

const translations = {"ar":"الفريق الحالي والمحتوى المنشور والنطاقات والملفات المخزنة.","bn":"Current team, published content, domains, and stored assets.","de":"Current team, published content, domains, and stored assets.","en":"Current team, published content, domains, and stored assets.","es":"Current team, published content, domains, and stored assets.","fr":"Current team, published content, domains, and stored assets.","hi":"Current team, published content, domains, and stored assets.","id":"Current team, published content, domains, and stored assets.","pt-BR":"Current team, published content, domains, and stored assets.","ru":"Current team, published content, domains, and stored assets.","ur":"Current team, published content, domains, and stored assets.","zh-CN":"Current team, published content, domains, and stored assets."};

export function settings_usage_group_capacity_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
