import { getLocale } from '../runtime.js';

const translations = {"ar":"لا شيء بعد","bn":"None Yet","de":"None Yet","en":"None Yet","es":"None Yet","fr":"None Yet","hi":"None Yet","id":"None Yet","pt-BR":"None Yet","ru":"None Yet","ur":"None Yet","zh-CN":"None Yet"};

export function admin_site_noneyet(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
