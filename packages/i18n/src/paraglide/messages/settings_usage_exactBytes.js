import { getLocale } from '../runtime.js';

const translations = {"ar":"{value} بايت بالضبط","bn":"{value} bytes exactly","de":"{value} bytes exactly","en":"{value} bytes exactly","es":"{value} bytes exactly","fr":"{value} bytes exactly","hi":"{value} bytes exactly","id":"{value} bytes exactly","pt-BR":"{value} bytes exactly","ru":"{value} bytes exactly","ur":"{value} bytes exactly","zh-CN":"{value} bytes exactly"};

export function settings_usage_exactBytes(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
