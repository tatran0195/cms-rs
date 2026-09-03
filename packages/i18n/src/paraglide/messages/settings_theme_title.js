import { getLocale } from '../runtime.js';

const translations = {"ar":"السمات","bn":"থিম","de":"Themen","en":"Themes","es":"Temas","fr":"Thèmes","hi":"थीम्स","id":"Tema","pt-BR":"Temas","ru":"Темы","ur":"تھیمز","zh-CN":"主题"};

export function settings_theme_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
