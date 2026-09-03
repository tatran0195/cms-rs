import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر نسخ رابط الدعوة","bn":"Could not copy the invitation link","de":"Could not copy the invitation link","en":"Could not copy the invitation link","es":"Could not copy the invitation link","fr":"Could not copy the invitation link","hi":"Could not copy the invitation link","id":"Could not copy the invitation link","pt-BR":"Could not copy the invitation link","ru":"Could not copy the invitation link","ur":"Could not copy the invitation link","zh-CN":"Could not copy the invitation link"};

export function admin_sites_copyerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
