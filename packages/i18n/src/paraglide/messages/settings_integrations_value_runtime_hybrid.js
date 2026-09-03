import { getLocale } from '../runtime.js';

const translations = {"ar":"هجين","bn":"হাইব্রিড","de":"Hybridbetrieb","en":"Hybrid","es":"Híbrido","fr":"Hybride","hi":"हाइब्रिड","id":"Hibrida","pt-BR":"Híbrido","ru":"Гибридный","ur":"ہائبرڈ","zh-CN":"混合"};

export function settings_integrations_value_runtime_hybrid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
