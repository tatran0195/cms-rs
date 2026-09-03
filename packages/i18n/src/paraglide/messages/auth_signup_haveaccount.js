import { getLocale } from '../runtime.js';

const translations = {"ar":"هل لديك حساب بالفعل؟","bn":"ইতিমধ্যে একটি অ্যাকাউন্ট আছে?","de":"Sie haben bereits ein Konto?","en":"Already have an account?","es":"¿Ya tienes una cuenta?","fr":"Vous avez déjà un compte ?","hi":"क्या आपके पास पहले से एक खाता मौजूद है?","id":"Sudah punya akun?","pt-BR":"Já tem uma conta?","ru":"У вас уже есть аккаунт?","ur":"پہلے سے ہی اکاؤنٹ ہے؟","zh-CN":"已经有帐户？"};

export function auth_signup_haveaccount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
