import { getLocale } from '../runtime.js';

const translations = {"ar":"النظام","bn":"System","de":"System","en":"System","es":"System","fr":"System","hi":"System","id":"System","pt-BR":"System","ru":"System","ur":"System","zh-CN":"System"};

export function settings_theme_option_system(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
