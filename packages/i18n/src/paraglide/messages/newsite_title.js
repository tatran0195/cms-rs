import { getLocale } from '../runtime.js';

const translations = {"ar":"موقع توثيق جديد","bn":"নতুন ডকুমেন্টেশন সাইট","de":"Neue Dokumentationsseite","en":"New documentation site","es":"Nuevo sitio de documentación","fr":"Nouveau site de documentation","hi":"नई दस्तावेज़ीकरण साइट","id":"Situs dokumentasi baru","pt-BR":"Novo site de documentação","ru":"Новый сайт документации","ur":"نئی دستاویزات کی سائٹ","zh-CN":"新文档站点"};

export function newsite_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
