import { getLocale } from '../runtime.js';

const translations = {"ar":"الإضافات","bn":"অ্যাড-অন","de":"Add-ons","en":"Add-ons","es":"Complementos","fr":"Modules complémentaires","hi":"ऐड-ऑन","id":"Pengaya","pt-BR":"Complementos","ru":"Дополнения","ur":"ایڈ آنز","zh-CN":"附加组件"};

export function settings_addons(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
