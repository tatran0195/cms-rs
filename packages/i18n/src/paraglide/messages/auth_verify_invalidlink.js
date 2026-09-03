import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط التحقق هذا غير صالح أو انتهت صلاحيته.","bn":"এই যাচাইকরণ লিঙ্কটি অবৈধ বা মেয়াদ শেষ হয়ে গেছে।","de":"Dieser Bestätigungslink ist ungültig oder abgelaufen.","en":"This verification link is invalid or has expired.","es":"Este enlace de verificación no es válido o ha caducado.","fr":"Ce lien de vérification n'est pas valide ou a expiré.","hi":"यह सत्यापन लिंक अमान्य है या समाप्त हो चुका है.","id":"Tautan verifikasi ini tidak valid atau telah kedaluwarsa.","pt-BR":"Este link de verificação é inválido ou expirou.","ru":"Эта ссылка для проверки недействительна или срок ее действия истек.","ur":"یہ تصدیقی لنک غلط ہے یا اس کی میعاد ختم ہو چکی ہے۔","zh-CN":"该验证链接无效或已过期。"};

export function auth_verify_invalidlink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
