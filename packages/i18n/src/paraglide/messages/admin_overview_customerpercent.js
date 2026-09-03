import { getLocale } from '../runtime.js';

const translations = {"ar":"{percent} من جميع العملاء","bn":"{percent} of all customers","de":"{percent} of all customers","en":"{percent} of all customers","es":"{percent} of all customers","fr":"{percent} of all customers","hi":"{percent} of all customers","id":"{percent} of all customers","pt-BR":"{percent} of all customers","ru":"{percent} of all customers","ur":"{percent} of all customers","zh-CN":"{percent} of all customers"};

export function admin_overview_customerpercent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
