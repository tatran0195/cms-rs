import { getLocale } from '../runtime.js';

const translations = {"ar":"المراجعة","bn":"Revision","de":"Revision","en":"Revision","es":"Revision","fr":"Revision","hi":"Revision","id":"Revision","pt-BR":"Revision","ru":"Revision","ur":"Revision","zh-CN":"Revision"};

export function settings_search_diagnostics_revision(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
