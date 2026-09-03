import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر قبول هذه الدعوة. ربما تكون قد انتهت صلاحيتها.","bn":"এই আমন্ত্রণ গ্রহণ করা যায়নি. এর মেয়াদ শেষ হয়ে গেছে।","de":"Diese Einladung konnte nicht angenommen werden. Möglicherweise ist es abgelaufen.","en":"Could not accept this invitation. It may have expired.","es":"No se pudo aceptar esta invitación. Puede que haya caducado.","fr":"Je n'ai pas pu accepter cette invitation. Il est peut-être expiré.","hi":"यह निमंत्रण स्वीकार नहीं कर सका. हो सकता है कि यह समाप्त हो गया हो.","id":"Tidak dapat menerima undangan ini. Mungkin sudah habis masa berlakunya.","pt-BR":"Não foi possível aceitar este convite. Pode ter expirado.","ru":"Не удалось принять это приглашение. Возможно, срок его действия истек.","ur":"اس دعوت کو قبول نہیں کیا جا سکا۔ ہو سکتا ہے اس کی میعاد ختم ہو گئی ہو۔","zh-CN":"无法接受此邀请。它可能已经过期了。"};

export function auth_invite_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
