import { getLocale } from '../runtime.js';

const translations = {"ar":"كبسولة","bn":"পিল","de":"Pille","en":"Pill","es":"pastilla","fr":"Pilule","hi":"गोली","id":"Pil","pt-BR":"Pílula","ru":"Таблетка","ur":"گولی","zh-CN":"丸"};

export function settings_styling_radius_pill(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
