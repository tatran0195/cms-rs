import { getLocale } from '../runtime.js';

const translations = {"ar":"المواقع الحديثة","bn":"Recent sites","de":"Recent sites","en":"Recent sites","es":"Recent sites","fr":"Recent sites","hi":"Recent sites","id":"Recent sites","pt-BR":"Recent sites","ru":"Recent sites","ur":"Recent sites","zh-CN":"Recent sites"};

export function admin_overview_recentsites(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
