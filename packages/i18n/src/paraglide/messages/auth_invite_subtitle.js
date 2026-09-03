import { getLocale } from '../runtime.js';

const translations = {"ar":"لقد تمت دعوتك إلى مساحة عمل","bn":"আপনাকে একটি কর্মক্ষেত্রে আমন্ত্রণ জানানো হয়েছে","de":"Sie wurden zu einem Arbeitsbereich eingeladen","en":"You've been invited to a workspace","es":"Te han invitado a un espacio de trabajo.","fr":"Vous avez été invité à un espace de travail","hi":"आपको कार्यस्थल पर आमंत्रित किया गया है","id":"Anda telah diundang ke ruang kerja","pt-BR":"Você foi convidado para um espaço de trabalho","ru":"Вас пригласили в рабочую область","ur":"آپ کو ایک ورک اسپیس میں مدعو کیا گیا ہے۔","zh-CN":"您已被邀请加入工作区"};

export function auth_invite_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
