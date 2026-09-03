import { getLocale } from '../runtime.js';

const translations = {"ar":"بلا مالك","bn":"Missing Owner","de":"Missing Owner","en":"Missing Owner","es":"Missing Owner","fr":"Missing Owner","hi":"Missing Owner","id":"Missing Owner","pt-BR":"Missing Owner","ru":"Missing Owner","ur":"Missing Owner","zh-CN":"Missing Owner"};

export function admin_status_missingowner(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
