import { getLocale } from '../runtime.js';

const translations = {"ar":"{whole}٫{fraction}","bn":"{whole}.{fraction}","de":"{whole}.{fraction}","en":"{whole}.{fraction}","es":"{whole}.{fraction}","fr":"{whole}.{fraction}","hi":"{whole}.{fraction}","id":"{whole}.{fraction}","pt-BR":"{whole}.{fraction}","ru":"{whole}.{fraction}","ur":"{whole}.{fraction}","zh-CN":"{whole}.{fraction}"};

export function settings_usage_decimal(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
