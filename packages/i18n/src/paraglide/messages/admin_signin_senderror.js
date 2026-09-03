import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر إرسال رمز تسجيل الدخول.","bn":"Could not send a sign-in code.","de":"Could not send a sign-in code.","en":"Could not send a sign-in code.","es":"Could not send a sign-in code.","fr":"Could not send a sign-in code.","hi":"Could not send a sign-in code.","id":"Could not send a sign-in code.","pt-BR":"Could not send a sign-in code.","ru":"Could not send a sign-in code.","ur":"Could not send a sign-in code.","zh-CN":"Could not send a sign-in code."};

export function admin_signin_senderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
