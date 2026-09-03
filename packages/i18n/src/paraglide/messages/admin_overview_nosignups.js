import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد تسجيلات خلال آخر {days} يومًا","bn":"No sign-ups in the last {days} days","de":"No sign-ups in the last {days} days","en":"No sign-ups in the last {days} days","es":"No sign-ups in the last {days} days","fr":"No sign-ups in the last {days} days","hi":"No sign-ups in the last {days} days","id":"No sign-ups in the last {days} days","pt-BR":"No sign-ups in the last {days} days","ru":"No sign-ups in the last {days} days","ur":"No sign-ups in the last {days} days","zh-CN":"No sign-ups in the last {days} days"};

export function admin_overview_nosignups(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
