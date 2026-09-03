import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ البدء…","bn":"Starting…","de":"Starting…","en":"Starting…","es":"Starting…","fr":"Starting…","hi":"Starting…","id":"Starting…","pt-BR":"Starting…","ru":"Starting…","ur":"Starting…","zh-CN":"Starting…"};

export function admin_support_starting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
