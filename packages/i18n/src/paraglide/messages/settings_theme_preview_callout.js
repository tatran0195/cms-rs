import { getLocale } from '../runtime.js';

const translations = {"ar":"تشترك العربية والإنجليزية في عقد تصميم واحد قابل للوصول.","bn":"Arabic and English share the same accessible token contract.","de":"Arabic and English share the same accessible token contract.","en":"Arabic and English share the same accessible token contract.","es":"Arabic and English share the same accessible token contract.","fr":"Arabic and English share the same accessible token contract.","hi":"Arabic and English share the same accessible token contract.","id":"Arabic and English share the same accessible token contract.","pt-BR":"Arabic and English share the same accessible token contract.","ru":"Arabic and English share the same accessible token contract.","ur":"Arabic and English share the same accessible token contract.","zh-CN":"Arabic and English share the same accessible token contract."};

export function settings_theme_preview_callout(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
