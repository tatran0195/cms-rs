import { getLocale } from '../runtime.js';

const translations = {"ar":"منتهي الصلاحية","bn":"মেয়াদোত্তীর্ণ","de":"Abgelaufen","en":"Expired","es":"Caducada","fr":"Expirée","hi":"समाप्त","id":"Kedaluwarsa","pt-BR":"Expirada","ru":"Истёк","ur":"میعاد ختم","zh-CN":"已过期"};

export function settings_apikeys_expired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
