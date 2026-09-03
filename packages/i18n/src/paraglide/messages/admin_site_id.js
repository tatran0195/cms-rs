import { getLocale } from '../runtime.js';

const translations = {"ar":"المعرّف","bn":"Id","de":"Id","en":"Id","es":"Id","fr":"Id","hi":"Id","id":"Id","pt-BR":"Id","ru":"Id","ur":"Id","zh-CN":"Id"};

export function admin_site_id(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
