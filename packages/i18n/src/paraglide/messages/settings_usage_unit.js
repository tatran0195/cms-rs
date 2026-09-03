import { getLocale } from '../runtime.js';

const translations = {"ar":"{value} {unit}","bn":"{value} {unit}","de":"{value} {unit}","en":"{value} {unit}","es":"{value} {unit}","fr":"{value} {unit}","hi":"{value} {unit}","id":"{value} {unit}","pt-BR":"{value} {unit}","ru":"{value} {unit}","ur":"{value} {unit}","zh-CN":"{value} {unit}"};

export function settings_usage_unit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
