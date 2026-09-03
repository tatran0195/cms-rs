import { getLocale } from '../runtime.js';

const translations = {"ar":"قراءة تحريرية","bn":"Editorial reading","de":"Editorial reading","en":"Editorial reading","es":"Editorial reading","fr":"Editorial reading","hi":"Editorial reading","id":"Editorial reading","pt-BR":"Editorial reading","ru":"Editorial reading","ur":"Editorial reading","zh-CN":"Editorial reading"};

export function settings_theme_option_editorial(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
