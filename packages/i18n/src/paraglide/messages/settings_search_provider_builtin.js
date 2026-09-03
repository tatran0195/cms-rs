import { getLocale } from '../runtime.js';

const translations = {"ar":"مدمج (Nibleaf)","bn":"অন্তর্নির্মিত (Nibleaf)","de":"Integriert (Nibleaf)","en":"Built-in (Nibleaf)","es":"Incorporado (Nibleaf)","fr":"Intégré (Nibleaf)","hi":"अंतर्निर्मित (Nibleaf)","id":"Bawaan (Nibleaf)","pt-BR":"Integrado (Nibleaf)","ru":"Встроенный (Nibleaf)","ur":"بلٹ ان (Nibleaf)","zh-CN":"内置（Nibleaf）"};

export function settings_search_provider_builtin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
