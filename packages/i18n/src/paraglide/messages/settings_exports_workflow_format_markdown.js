import { getLocale } from '../runtime.js';

const translations = {"ar":"ملف Markdown ZIP","bn":"Markdown জিপ","de":"Markdown ZIP","en":"Markdown ZIP","es":"Markdown ZIP","fr":"Markdown ZIP","hi":"Markdown ज़िप","id":"Markdown ZIP","pt-BR":"Markdown CEP","ru":"Markdown Почтовый индекс","ur":"Markdown ZIP","zh-CN":"Markdown 邮政编码"};

export function settings_exports_workflow_format_markdown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
