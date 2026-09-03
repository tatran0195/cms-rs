import { getLocale } from '../runtime.js';

const translations = {"ar":"اللون المميّز","bn":"উচ্চারণ","de":"Akzent","en":"Accent","es":"Acento","fr":"Accent","hi":"उच्चारण","id":"Aksen","pt-BR":"Sotaque","ru":"Акцент","ur":"لہجہ","zh-CN":"口音"};

export function settings_theme_color_accent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
