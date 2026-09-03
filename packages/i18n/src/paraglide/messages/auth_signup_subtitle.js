import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ مساحة عملك","bn":"আপনার কর্মক্ষেত্র তৈরি করুন","de":"Erstellen Sie Ihren Arbeitsbereich","en":"Create your workspace","es":"Crea tu espacio de trabajo","fr":"Créez votre espace de travail","hi":"अपना कार्यक्षेत्र बनाएं","id":"Ciptakan ruang kerja Anda","pt-BR":"Crie seu espaço de trabalho","ru":"Создайте свое рабочее пространство","ur":"اپنے کام کی جگہ بنائیں","zh-CN":"创建您的工作空间"};

export function auth_signup_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
