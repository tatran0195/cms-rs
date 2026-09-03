import { getLocale } from '../runtime.js';

const translations = {"ar":"فريق Nibleaf","bn":"The Nibleaf team","de":"The Nibleaf team","en":"The Nibleaf team","es":"The Nibleaf team","fr":"The Nibleaf team","hi":"The Nibleaf team","id":"The Nibleaf team","pt-BR":"The Nibleaf team","ru":"The Nibleaf team","ur":"The Nibleaf team","zh-CN":"The Nibleaf team"};

export function blog_team(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
