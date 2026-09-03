import { getLocale } from '../runtime.js';

const translations = {"ar":"تم","bn":"Done","de":"Done","en":"Done","es":"Done","fr":"Done","hi":"Done","id":"Done","pt-BR":"Done","ru":"Done","ur":"Done","zh-CN":"Done"};

export function admin_common_done(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
