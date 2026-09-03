import { getLocale } from '../runtime.js';

const translations = {"ar":"التسجيلات خلال آخر {days} يومًا","bn":"Sign-ups over the last {days} days","de":"Sign-ups over the last {days} days","en":"Sign-ups over the last {days} days","es":"Sign-ups over the last {days} days","fr":"Sign-ups over the last {days} days","hi":"Sign-ups over the last {days} days","id":"Sign-ups over the last {days} days","pt-BR":"Sign-ups over the last {days} days","ru":"Sign-ups over the last {days} days","ur":"Sign-ups over the last {days} days","zh-CN":"Sign-ups over the last {days} days"};

export function admin_overview_signupsperiod(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
