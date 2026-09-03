import { getLocale } from '../runtime.js';

const translations = {"ar":"تحقّق من حسابك","bn":"আপনার অ্যাকাউন্ট যাচাই করুন","de":"Bestätigen Sie Ihr Konto","en":"Verify your account","es":"Verifica tu cuenta","fr":"Vérifiez votre compte","hi":"अपना खाता सत्यापित करें","id":"Verifikasi akun Anda","pt-BR":"Verifique sua conta","ru":"Подтвердите свой аккаунт","ur":"اپنے اکاؤنٹ کی تصدیق کریں۔","zh-CN":"验证您的帐户"};

export function settings_git_workflow_step_authorizedesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
