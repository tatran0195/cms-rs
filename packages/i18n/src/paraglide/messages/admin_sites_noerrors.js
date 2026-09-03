import { getLocale } from '../runtime.js';

const translations = {"ar":"لا أخطاء","bn":"No errors","de":"No errors","en":"No errors","es":"No errors","fr":"No errors","hi":"No errors","id":"No errors","pt-BR":"No errors","ru":"No errors","ur":"No errors","zh-CN":"No errors"};

export function admin_sites_noerrors(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
