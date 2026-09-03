import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز لمرة واحدة","bn":"One-time code","de":"One-time code","en":"One-time code","es":"One-time code","fr":"One-time code","hi":"One-time code","id":"One-time code","pt-BR":"One-time code","ru":"One-time code","ur":"One-time code","zh-CN":"One-time code"};

export function admin_signin_code(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
