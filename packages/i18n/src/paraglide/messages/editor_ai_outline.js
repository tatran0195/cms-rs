import { getLocale } from '../runtime.js';

const translations = {"ar":"مخطط تفصيلي","bn":"রূপরেখা","de":"Gliederung","en":"Outline","es":"esquema","fr":"Aperçu","hi":"रूपरेखा","id":"Garis besar","pt-BR":"Esboço","ru":"Схема","ur":"خاکہ","zh-CN":"概要"};

export function editor_ai_outline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
