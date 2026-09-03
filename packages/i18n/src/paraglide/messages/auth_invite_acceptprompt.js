import { getLocale } from '../runtime.js';

const translations = {"ar":"اقبل الدعوة للانضمام إلى مساحة العمل.","bn":"কর্মক্ষেত্রে যোগদানের আমন্ত্রণ গ্রহণ করুন।","de":"Nehmen Sie die Einladung zum Beitritt zum Arbeitsbereich an.","en":"Accept the invitation to join the workspace.","es":"Acepta la invitación para unirte al espacio de trabajo.","fr":"Acceptez l'invitation à rejoindre l'espace de travail.","hi":"कार्यक्षेत्र में शामिल होने का निमंत्रण स्वीकार करें.","id":"Terima undangan untuk bergabung dengan ruang kerja.","pt-BR":"Aceite o convite para ingressar no espaço de trabalho.","ru":"Примите приглашение присоединиться к рабочей области.","ur":"ورک اسپیس میں شامل ہونے کی دعوت قبول کریں۔","zh-CN":"接受加入工作区的邀请。"};

export function auth_invite_acceptprompt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
