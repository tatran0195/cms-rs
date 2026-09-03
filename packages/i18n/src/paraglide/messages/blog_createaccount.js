import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ حسابًا مجانيًا","bn":"Create free account","de":"Create free account","en":"Create free account","es":"Create free account","fr":"Create free account","hi":"Create free account","id":"Create free account","pt-BR":"Create free account","ru":"Create free account","ur":"Create free account","zh-CN":"Create free account"};

export function blog_createaccount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
