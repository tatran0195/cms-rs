import { getLocale } from '../runtime.js';

const translations = {"ar":"تنتهي صلاحية الرمز خلال 10 دقائق ويمكن استخدامه مرة واحدة.","bn":"The code expires in 10 minutes and can be used once.","de":"The code expires in 10 minutes and can be used once.","en":"The code expires in 10 minutes and can be used once.","es":"The code expires in 10 minutes and can be used once.","fr":"The code expires in 10 minutes and can be used once.","hi":"The code expires in 10 minutes and can be used once.","id":"The code expires in 10 minutes and can be used once.","pt-BR":"The code expires in 10 minutes and can be used once.","ru":"The code expires in 10 minutes and can be used once.","ur":"The code expires in 10 minutes and can be used once.","zh-CN":"The code expires in 10 minutes and can be used once."};

export function admin_signin_expiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
