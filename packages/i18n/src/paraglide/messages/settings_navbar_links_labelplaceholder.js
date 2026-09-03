import { getLocale } from '../runtime.js';

const translations = {"ar":"التوثيق","bn":"ডকুমেন্টেশন","de":"Dokumentation","en":"Documentation","es":"Documentación","fr":"Documentation","hi":"दस्तावेज़ीकरण","id":"Dokumentasi","pt-BR":"Documentação","ru":"Документация","ur":"دستاویزی","zh-CN":"文档"};

export function settings_navbar_links_labelplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
