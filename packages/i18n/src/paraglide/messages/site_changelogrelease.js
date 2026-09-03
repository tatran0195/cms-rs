import { getLocale } from '../runtime.js';

const translations = {"ar":"إصدار","bn":"মুক্তি","de":"Veröffentlichung","en":"Release","es":"Lanzamiento","fr":"Version","hi":"रिलीज़","id":"Rilis","pt-BR":"Lançamento","ru":"Релиз","ur":"ریلیز","zh-CN":"发布"};

export function site_changelogrelease(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
