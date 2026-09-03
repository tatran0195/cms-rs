import { getLocale } from '../runtime.js';

const translations = {"ar":"نموذج التضمين","bn":"Embedding model","de":"Embedding model","en":"Embedding model","es":"Embedding model","fr":"Embedding model","hi":"Embedding model","id":"Embedding model","pt-BR":"Embedding model","ru":"Embedding model","ur":"Embedding model","zh-CN":"Embedding model"};

export function settings_search_diagnostics_model(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
