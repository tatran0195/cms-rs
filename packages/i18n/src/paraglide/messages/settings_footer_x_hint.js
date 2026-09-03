import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط إلى ملفك الشخصي.","bn":"আপনার প্রোফাইল লিঙ্ক.","de":"Link zu Ihrem Profil.","en":"Link to your profile.","es":"Enlace a tu perfil.","fr":"Lien vers votre profil.","hi":"अपनी प्रोफ़ाइल से लिंक करें.","id":"Tautan ke profil Anda.","pt-BR":"Link para o seu perfil.","ru":"Ссылка на ваш профиль.","ur":"اپنے پروفائل سے لنک کریں۔","zh-CN":"链接到您的个人资料。"};

export function settings_footer_x_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
