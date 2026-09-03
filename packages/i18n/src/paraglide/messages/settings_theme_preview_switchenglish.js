import { getLocale } from '../runtime.js';

const translations = {"ar":"English · LTR","bn":"English · LTR","de":"English · LTR","en":"English · LTR","es":"English · LTR","fr":"English · LTR","hi":"English · LTR","id":"English · LTR","pt-BR":"English · LTR","ru":"English · LTR","ur":"English · LTR","zh-CN":"English · LTR"};

export function settings_theme_preview_switchenglish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
