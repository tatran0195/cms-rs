import { getLocale } from '../runtime.js';

const translations = {"ar":"Markdown","bn":"Markdown","de":"Markdown","en":"Markdown","es":"Markdown","fr":"Markdown","hi":"Markdown","id":"Markdown","pt-BR":"Markdown","ru":"Markdown","ur":"Markdown","zh-CN":"Markdown"};

export function editor_mode_markdown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
