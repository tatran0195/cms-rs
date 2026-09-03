import { getLocale } from '../runtime.js';

const translations = {"ar":"شجرة","bn":"Tree","de":"Tree","en":"Tree","es":"Tree","fr":"Tree","hi":"Tree","id":"Tree","pt-BR":"Tree","ru":"Tree","ur":"Tree","zh-CN":"Tree"};

export function settings_theme_option_tree(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
