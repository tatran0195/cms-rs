import { getLocale } from '../runtime.js';

const translations = {"ar":"ملفك الشخصي في جميع مساحات العمل.","bn":"প্রতিটি কর্মক্ষেত্র জুড়ে আপনার ব্যক্তিগত প্রোফাইল।","de":"Ihr persönliches Profil in jedem Arbeitsbereich.","en":"Your personal profile across every workspace.","es":"Su perfil personal en cada espacio de trabajo.","fr":"Votre profil personnel sur chaque espace de travail.","hi":"प्रत्येक कार्यक्षेत्र में आपकी व्यक्तिगत प्रोफ़ाइल।","id":"Profil pribadi Anda di setiap ruang kerja.","pt-BR":"Seu perfil pessoal em todos os espaços de trabalho.","ru":"Ваш личный профиль в каждом рабочем пространстве.","ur":"ہر ورک اسپیس میں آپ کا ذاتی پروفائل۔","zh-CN":"您在每个工作空间中的个人资料。"};

export function settings_account_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
