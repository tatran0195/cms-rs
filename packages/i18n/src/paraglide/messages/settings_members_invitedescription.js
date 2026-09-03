import { getLocale } from '../runtime.js';

const translations = {"ar":"أرسل دعوة للتعاون في مساحة العمل هذه.","bn":"এই কর্মক্ষেত্রে সহযোগিতা করার জন্য একটি আমন্ত্রণ পাঠান।","de":"Senden Sie eine Einladung zur Zusammenarbeit an diesem Arbeitsbereich.","en":"Send an invitation to collaborate on this workspace.","es":"Envía una invitación para colaborar en este espacio de trabajo.","fr":"Envoyez une invitation à collaborer sur cet espace de travail.","hi":"इस कार्यक्षेत्र पर सहयोग करने के लिए आमंत्रण भेजें.","id":"Kirim undangan untuk berkolaborasi di ruang kerja ini.","pt-BR":"Envie um convite para colaborar neste espaço de trabalho.","ru":"Отправьте приглашение к совместной работе над этой рабочей областью.","ur":"اس ورک اسپیس پر تعاون کرنے کے لیے ایک دعوت نامہ بھیجیں۔","zh-CN":"发送在此工作区进行协作的邀请。"};

export function settings_members_invitedescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
