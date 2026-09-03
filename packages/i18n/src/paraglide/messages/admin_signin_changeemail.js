import { getLocale } from '../runtime.js';

const translations = {"ar":"تغيير البريد","bn":"Change email","de":"Change email","en":"Change email","es":"Change email","fr":"Change email","hi":"Change email","id":"Change email","pt-BR":"Change email","ru":"Change email","ur":"Change email","zh-CN":"Change email"};

export function admin_signin_changeemail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
