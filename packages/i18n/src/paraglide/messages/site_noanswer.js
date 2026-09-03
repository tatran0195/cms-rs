import { getLocale } from '../runtime.js';

const translations = {"ar":"لا تُعرض إجابة عندما لا تدعمها الوثائق.","bn":"No answer is returned when the docs do not support one.","de":"No answer is returned when the docs do not support one.","en":"No answer is returned when the docs do not support one.","es":"No answer is returned when the docs do not support one.","fr":"No answer is returned when the docs do not support one.","hi":"No answer is returned when the docs do not support one.","id":"No answer is returned when the docs do not support one.","pt-BR":"No answer is returned when the docs do not support one.","ru":"No answer is returned when the docs do not support one.","ur":"No answer is returned when the docs do not support one.","zh-CN":"No answer is returned when the docs do not support one."};

export function site_noanswer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
