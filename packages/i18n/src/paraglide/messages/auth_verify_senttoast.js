import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إرسال رمز تحقق جديد إلى {email}","bn":"একটি নতুন যাচাইকরণ কোড {email} এ পাঠানো হয়েছে","de":"Ein neuer Bestätigungscode wurde an {email} gesendet.","en":"A new verification code was sent to {email}","es":"Se envió un nuevo código de verificación a {email}","fr":"Un nouveau code de vérification a été envoyé à {email}","hi":"एक नया सत्यापन कोड {email} पर भेजा गया था","id":"Kode verifikasi baru telah dikirim ke {email}","pt-BR":"Um novo código de verificação foi enviado para {email}","ru":"Новый код подтверждения был отправлен на адрес {email}.","ur":"ایک نیا تصدیقی کوڈ {email} پر بھیجا گیا","zh-CN":"新的验证码已发送至 {email}"};

export function auth_verify_senttoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
