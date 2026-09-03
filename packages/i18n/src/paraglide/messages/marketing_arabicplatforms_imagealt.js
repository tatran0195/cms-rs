import { getLocale } from '../runtime.js';

const translations = {"ar":"مقارنة منصات التوثيق للفرق العربية","bn":"Documentation platforms for Arabic teams compared","de":"Documentation platforms for Arabic teams compared","en":"Documentation platforms for Arabic teams compared","es":"Documentation platforms for Arabic teams compared","fr":"Documentation platforms for Arabic teams compared","hi":"Documentation platforms for Arabic teams compared","id":"Documentation platforms for Arabic teams compared","pt-BR":"Documentation platforms for Arabic teams compared","ru":"Documentation platforms for Arabic teams compared","ur":"Documentation platforms for Arabic teams compared","zh-CN":"Documentation platforms for Arabic teams compared"};

export function marketing_arabicplatforms_imagealt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
