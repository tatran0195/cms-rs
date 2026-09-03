import { getLocale } from '../runtime.js';

const translations = {"ar":"العودة إلى تسجيل الدخول","bn":"লগ ইন করতে ফিরে যান","de":"Zurück zum Anmelden","en":"Back to log in","es":"Volver a iniciar sesión","fr":"Retour pour me connecter","hi":"लॉग इन करने के लिए वापस जाएँ","id":"Kembali untuk masuk","pt-BR":"Voltar para fazer login","ru":"Вернуться, чтобы войти","ur":"لاگ ان پر واپس جائیں۔","zh-CN":"返回登录"};

export function auth_backtosignin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
