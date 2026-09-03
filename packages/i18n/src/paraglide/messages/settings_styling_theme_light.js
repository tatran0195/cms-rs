import { getLocale } from '../runtime.js';

const translations = {"ar":"فاتح","bn":"আলো","de":"Licht","en":"Light","es":"Luz","fr":"Lumière","hi":"रोशनी","id":"Ringan","pt-BR":"Luz","ru":"Свет","ur":"روشنی","zh-CN":"光"};

export function settings_styling_theme_light(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
