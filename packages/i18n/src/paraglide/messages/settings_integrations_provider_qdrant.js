import { getLocale } from '../runtime.js';

const translations = {"ar":"Qdrant","bn":"Qdrant","de":"Qdrant","en":"Qdrant","es":"Qdrant","fr":"Qdrant","hi":"Qdrant","id":"Qdrant","pt-BR":"Qdrant","ru":"Qdrant","ur":"Qdrant","zh-CN":"Qdrant"};

export function settings_integrations_provider_qdrant(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
