import { getLocale } from '../runtime.js';

const translations = {"ar":"إجابة","bn":"Answer","de":"Answer","en":"Answer","es":"Answer","fr":"Answer","hi":"Answer","id":"Answer","pt-BR":"Answer","ru":"Answer","ur":"Answer","zh-CN":"Answer"};

export function site_answer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
