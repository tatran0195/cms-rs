import { getLocale } from '../runtime.js';

const translations = {"ar":"تسجيل الدخول","bn":"লগ ইন করুন","de":"Melden Sie sich an","en":"Log in","es":"Iniciar sesión","fr":"Connectez-vous","hi":"लॉग इन करें","id":"Masuk","pt-BR":"Faça login","ru":"Войти","ur":"لاگ ان کریں۔","zh-CN":"登录"};

export function auth_passwordless_continue(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
