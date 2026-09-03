import { getLocale } from '../runtime.js';

const translations = {"ar":"ليس لديك حساب؟","bn":"কোন হিসাব নেই?","de":"Kein Konto?","en":"No account?","es":"¿Sin cuenta?","fr":"Pas de compte ?","hi":"कोई हिसाब नहीं?","id":"Tidak ada akun?","pt-BR":"Sem conta?","ru":"Нет аккаунта?","ur":"کوئی اکاؤنٹ نہیں؟","zh-CN":"没有帐户？"};

export function auth_signin_noaccount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
