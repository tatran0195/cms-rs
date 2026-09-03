import { getLocale } from '../runtime.js';

const translations = {"ar":"LTR","bn":"LTR","de":"LTR","en":"LTR","es":"LTR","fr":"LTR","hi":"LTR","id":"LTR","pt-BR":"LTR","ru":"LTR","ur":"LTR","zh-CN":"LTR"};

export function settings_languages_direction_ltr(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
