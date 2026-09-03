import { getLocale } from '../runtime.js';

const translations = {"ar":"مسودة","bn":"খসড়া","de":"Entwurf","en":"Draft","es":"Borrador","fr":"Brouillon","hi":"ड्राफ्ट","id":"Draf","pt-BR":"Rascunho","ru":"Черновик","ur":"مسودہ","zh-CN":"吃水"};

export function settings_git_workflow_draft(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
