import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تسجيل الدخول","bn":"লগ ইন করা যায়নি","de":"Konnte mich nicht anmelden","en":"Could not log in","es":"No se pudo iniciar sesión","fr":"Impossible de se connecter","hi":"लॉग इन नहीं हो सका","id":"Tidak dapat masuk","pt-BR":"Não foi possível fazer login","ru":"Не удалось войти в систему","ur":"لاگ ان نہیں ہو سکا","zh-CN":"无法登录"};

export function auth_signin_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
