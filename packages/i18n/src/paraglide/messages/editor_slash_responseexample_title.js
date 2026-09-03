import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال الاستجابة","bn":"Response example","de":"Response example","en":"Response example","es":"Response example","fr":"Response example","hi":"Response example","id":"Response example","pt-BR":"Response example","ru":"Response example","ur":"Response example","zh-CN":"Response example"};

export function editor_slash_responseexample_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
