import { getLocale } from '../runtime.js';

const translations = {"ar":"طيّ","bn":"সঙ্কুচিত","de":"Zusammenbruch","en":"Collapse","es":"Colapso","fr":"Réduire","hi":"पतन","id":"Runtuh","pt-BR":"Recolher","ru":"Свернуть","ur":"سمٹنا","zh-CN":"崩溃"};

export function editor_collapse(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
