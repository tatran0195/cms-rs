import { getLocale } from '../runtime.js';

const translations = {"ar":"سجّل الدخول للانضمام","bn":"যোগ দিতে লগ ইন করুন","de":"Melden Sie sich an, um beizutreten","en":"Log in to join","es":"Inicia sesión para unirte","fr":"Connectez-vous pour rejoindre","hi":"शामिल होने के लिए लॉग इन करें","id":"Masuk untuk bergabung","pt-BR":"Faça login para participar","ru":"Войдите, чтобы присоединиться","ur":"شامل ہونے کے لیے لاگ ان کریں۔","zh-CN":"登录加入"};

export function auth_invite_signintojoin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
