import { getLocale } from '../runtime.js';

const translations = {"ar":"حلّ","bn":"সমাধান করুন","de":"Lösen","en":"Resolve","es":"resolver","fr":"Résoudre","hi":"समाधान करें","id":"Putuskan","pt-BR":"Resolver","ru":"Решить","ur":"حل کریں۔","zh-CN":"解决"};

export function editor_comments_resolve(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
