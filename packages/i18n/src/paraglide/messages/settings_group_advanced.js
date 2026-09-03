import { getLocale } from '../runtime.js';

const translations = {"ar":"متقدّم","bn":"উন্নত","de":"Fortgeschritten","en":"Advanced","es":"Avanzado","fr":"Avancé","hi":"उन्नत","id":"Lanjutan","pt-BR":"Avançado","ru":"Расширенный","ur":"اعلی درجے کی","zh-CN":"高级"};

export function settings_group_advanced(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
