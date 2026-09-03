import { getLocale } from '../runtime.js';

const translations = {"ar":"{value} ميغابايت","bn":"{value} MB","de":"{value} MB","en":"{value} MB","es":"{value} MB","fr":"{value} Mo","hi":"{value} एमबी","id":"{value} MB","pt-BR":"{value}MB","ru":"{value} МБ","ur":"{value} MB","zh-CN":"{value} MB"};

export function settings_usage_unit_mb(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
