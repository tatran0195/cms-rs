import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحميل تشخيص الفهرس.","bn":"Index diagnostics could not be loaded.","de":"Index diagnostics could not be loaded.","en":"Index diagnostics could not be loaded.","es":"Index diagnostics could not be loaded.","fr":"Index diagnostics could not be loaded.","hi":"Index diagnostics could not be loaded.","id":"Index diagnostics could not be loaded.","pt-BR":"Index diagnostics could not be loaded.","ru":"Index diagnostics could not be loaded.","ur":"Index diagnostics could not be loaded.","zh-CN":"Index diagnostics could not be loaded."};

export function settings_search_diagnostics_errorbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
