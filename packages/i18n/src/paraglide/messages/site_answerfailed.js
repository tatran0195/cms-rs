import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر إنشاء الإجابة. حاول مرة أخرى لاحقًا.","bn":"Could not generate an answer. Try again later.","de":"Could not generate an answer. Try again later.","en":"Could not generate an answer. Try again later.","es":"Could not generate an answer. Try again later.","fr":"Could not generate an answer. Try again later.","hi":"Could not generate an answer. Try again later.","id":"Could not generate an answer. Try again later.","pt-BR":"Could not generate an answer. Try again later.","ru":"Could not generate an answer. Try again later.","ur":"Could not generate an answer. Try again later.","zh-CN":"Could not generate an answer. Try again later."};

export function site_answerfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
