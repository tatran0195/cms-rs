import { getLocale } from '../runtime.js';

const translations = {"ar":"مستديرة","bn":"গোলাকার","de":"Abgerundet","en":"Rounded","es":"redondeado","fr":"Arrondi","hi":"गोलाकार","id":"Bulat","pt-BR":"Arredondado","ru":"Закругленный","ur":"گول","zh-CN":"圆形"};

export function settings_styling_radius_rounded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
