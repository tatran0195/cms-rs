import { getLocale } from '../runtime.js';

const translations = {"ar":"سجّل الدخول إلى مساحة عملك","bn":"আপনার কর্মক্ষেত্রে লগ ইন করুন","de":"Melden Sie sich bei Ihrem Arbeitsbereich an","en":"Log in to your workspace","es":"Inicia sesión en tu espacio de trabajo","fr":"Connectez-vous à votre espace de travail","hi":"अपने कार्यक्षेत्र में लॉग इन करें","id":"Masuk ke ruang kerja Anda","pt-BR":"Faça login no seu espaço de trabalho","ru":"Войдите в свою рабочую область","ur":"اپنے ورک اسپیس میں لاگ ان کریں۔","zh-CN":"登录到您的工作区"};

export function auth_signin_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
