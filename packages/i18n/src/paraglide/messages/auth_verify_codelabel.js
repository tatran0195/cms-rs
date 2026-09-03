import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز التحقق","bn":"যাচাইকরণ কোড","de":"Bestätigungscode","en":"Verification code","es":"Código de verificación","fr":"Code de vérification","hi":"सत्यापन कोड","id":"Kode verifikasi","pt-BR":"Código de verificação","ru":"Код подтверждения","ur":"تصدیقی کوڈ","zh-CN":"验证码"};

export function auth_verify_codelabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
