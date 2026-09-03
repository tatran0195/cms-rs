import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ تسجيل الدخول…","bn":"লগ ইন করা হচ্ছে...","de":"Anmelden…","en":"Logging in…","es":"Iniciando sesión…","fr":"Connexion…","hi":"लॉग इन हो रहा है...","id":"Masuk…","pt-BR":"Fazendo login…","ru":"Вход в систему…","ur":"لاگ ان ہو رہا ہے…","zh-CN":"正在登录..."};

export function auth_signin_submitting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
