import { getLocale } from '../runtime.js';

const translations = {"ar":"تسجيل الدخول باستخدام Google","bn":"Google দিয়ে লগ ইন করুন","de":"Melden Sie sich mit Google an","en":"Log in with Google","es":"Inicia sesión con Google","fr":"Connectez-vous avec Google","hi":"Google से लॉग इन करें","id":"Masuk dengan Google","pt-BR":"Faça login com Google","ru":"Войдите с помощью Google","ur":"Google کے ساتھ لاگ ان کریں","zh-CN":"使用 Google 登录"};

export function auth_google_signin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
