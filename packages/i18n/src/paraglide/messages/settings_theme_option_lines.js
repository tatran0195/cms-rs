import { getLocale } from '../runtime.js';

const translations = {"ar":"شبكة خطوط","bn":"Grid lines","de":"Grid lines","en":"Grid lines","es":"Grid lines","fr":"Grid lines","hi":"Grid lines","id":"Grid lines","pt-BR":"Grid lines","ru":"Grid lines","ur":"Grid lines","zh-CN":"Grid lines"};

export function settings_theme_option_lines(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
