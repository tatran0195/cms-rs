import { getLocale } from '../runtime.js';

const translations = {"ar":"بطاقة ذات صلة","bn":"Related card","de":"Related card","en":"Related card","es":"Related card","fr":"Related card","hi":"Related card","id":"Related card","pt-BR":"Related card","ru":"Related card","ur":"Related card","zh-CN":"Related card"};

export function editor_slash_relatedcard_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
