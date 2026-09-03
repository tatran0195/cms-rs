import { getLocale } from '../runtime.js';

const translations = {"ar":".","bn":".","de":".","en":".","es":".","fr":".","hi":".","id":".","pt-BR":".","ru":".","ur":".","zh-CN":"。"};

export function settings_variables_descriptionafter(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
