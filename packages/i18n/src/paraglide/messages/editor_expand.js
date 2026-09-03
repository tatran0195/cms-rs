import { getLocale } from '../runtime.js';

const translations = {"ar":"توسيع","bn":"প্রসারিত করুন","de":"Erweitern","en":"Expand","es":"Expandir","fr":"Développer","hi":"विस्तार करें","id":"Perluas","pt-BR":"Expandir","ru":"Развернуть","ur":"پھیلائیں۔","zh-CN":"展开"};

export function editor_expand(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
