import { getLocale } from '../runtime.js';

const translations = {"ar":"الإبلاغ عن إساءة","bn":"Report abuse","de":"Report abuse","en":"Report abuse","es":"Report abuse","fr":"Report abuse","hi":"Report abuse","id":"Report abuse","pt-BR":"Report abuse","ru":"Report abuse","ur":"Report abuse","zh-CN":"Report abuse"};

export function site_reportabuse(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
