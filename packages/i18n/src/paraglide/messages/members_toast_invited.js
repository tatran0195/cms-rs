import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت دعوة {email}","bn":"আমন্ত্রিত {email}","de":"Eingeladen {email}","en":"Invited {email}","es":"Invitado {email}","fr":"Invité {email}","hi":"आमंत्रित {email}","id":"Diundang {email}","pt-BR":"Convidado {email}","ru":"Приглашен {email}","ur":"مدعو کیا گیا {email}","zh-CN":"已邀请 {email}"};

export function members_toast_invited(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
