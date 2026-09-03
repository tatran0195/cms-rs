import { getLocale } from '../runtime.js';

const translations = {"ar":"إطار","bn":"ফ্রেম","de":"Rahmen","en":"Frame","es":"marco","fr":"Cadre","hi":"फ़्रेम","id":"Bingkai","pt-BR":"Quadro","ru":"Рамка","ur":"فریم","zh-CN":"框架"};

export function editor_slash_frame_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
