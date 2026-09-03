import { getLocale } from '../runtime.js';

const translations = {"ar":"تشخيص الفهرس","bn":"Index diagnostics","de":"Index diagnostics","en":"Index diagnostics","es":"Index diagnostics","fr":"Index diagnostics","hi":"Index diagnostics","id":"Index diagnostics","pt-BR":"Index diagnostics","ru":"Index diagnostics","ur":"Index diagnostics","zh-CN":"Index diagnostics"};

export function settings_search_diagnostics_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
