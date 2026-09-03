import { getLocale } from '../runtime.js';

const translations = {"ar":"زاهٍ","bn":"Vivid","de":"Vivid","en":"Vivid","es":"Vivid","fr":"Vivid","hi":"Vivid","id":"Vivid","pt-BR":"Vivid","ru":"Vivid","ur":"Vivid","zh-CN":"Vivid"};

export function settings_theme_option_vivid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
