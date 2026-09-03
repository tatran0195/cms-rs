import { getLocale } from '../runtime.js';

const translations = {"ar":"Nibleaf يعمل من دون كلمة مرور","bn":"Nibleaf পাসওয়ার্ডহীন","de":"Nibleaf ist passwortlos","en":"Nibleaf is passwordless","es":"Nibleaf no tiene contraseña","fr":"Nibleaf est sans mot de passe","hi":"Nibleaf पासवर्ड रहित है","id":"Nibleaf tidak memiliki kata sandi","pt-BR":"Nibleaf não tem senha","ru":"Nibleaf не имеет пароля","ur":"Nibleaf بغیر پاس ورڈ ہے۔","zh-CN":"Nibleaf 是无密码的"};

export function auth_passwordless_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
