import { getLocale } from '../runtime.js';

const translations = {"ar":"أخطاء النطاقات","bn":"Domain errors","de":"Domain errors","en":"Domain errors","es":"Domain errors","fr":"Domain errors","hi":"Domain errors","id":"Domain errors","pt-BR":"Domain errors","ru":"Domain errors","ur":"Domain errors","zh-CN":"Domain errors"};

export function admin_overview_domainerrors(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
