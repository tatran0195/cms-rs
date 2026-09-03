import { getLocale } from '../runtime.js';

const translations = {"ar":"أُرسلت هذه الدعوة إلى {email}. سجّل الدخول بهذا البريد لقبولها.","bn":"এই আমন্ত্রণটি {email} এ পাঠানো হয়েছে৷ এটি গ্রহণ করতে সেই ঠিকানা দিয়ে লগ ইন করুন।","de":"Diese Einladung wurde an {email} gesendet. Melden Sie sich mit dieser Adresse an, um es zu akzeptieren.","en":"This invitation was sent to {email}. Log in with that address to accept it.","es":"Esta invitación fue enviada a {email}. Inicia sesión con esa dirección para aceptarla.","fr":"Cette invitation a été envoyée à {email}. Connectez-vous avec cette adresse pour l'accepter.","hi":"यह आमंत्रण {email} को भेजा गया था। इसे स्वीकार करने के लिए उस पते से लॉग इन करें।","id":"Undangan ini telah dikirim ke {email}. Masuk dengan alamat itu untuk menerimanya.","pt-BR":"Este convite foi enviado para {email}. Faça login com esse endereço para aceitá-lo.","ru":"Это приглашение было отправлено на адрес {email}. Войдите с этим адресом, чтобы принять его.","ur":"یہ دعوت نامہ {email} کو بھیجا گیا تھا۔ اسے قبول کرنے کے لیے اس ایڈریس کے ساتھ لاگ ان کریں۔","zh-CN":"此邀请已发送至 {email}。使用该地址登录以接受它。"};

export function auth_invite_wrongaccount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
