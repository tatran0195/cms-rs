import { getLocale } from '../runtime.js';

const translations = {"ar":"توثيق المنتجات والبحث وملكية المحتوى","bn":"Product documentation, search, and ownership","de":"Product documentation, search, and ownership","en":"Product documentation, search, and ownership","es":"Product documentation, search, and ownership","fr":"Product documentation, search, and ownership","hi":"Product documentation, search, and ownership","id":"Product documentation, search, and ownership","pt-BR":"Product documentation, search, and ownership","ru":"Product documentation, search, and ownership","ur":"Product documentation, search, and ownership","zh-CN":"Product documentation, search, and ownership"};

export function blog_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
