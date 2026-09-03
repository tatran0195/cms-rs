import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل رمز تسجيل الدخول","bn":"Enter your sign-in code","de":"Enter your sign-in code","en":"Enter your sign-in code","es":"Enter your sign-in code","fr":"Enter your sign-in code","hi":"Enter your sign-in code","id":"Enter your sign-in code","pt-BR":"Enter your sign-in code","ru":"Enter your sign-in code","ur":"Enter your sign-in code","zh-CN":"Enter your sign-in code"};

export function admin_signin_codetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
