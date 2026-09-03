import { getLocale } from '../runtime.js';

const translations = {"ar":"أُرسل رمز التحقق إلى بريدك الإلكتروني الحالي","bn":"যাচাইকরণ কোড আপনার বর্তমান ইমেলে পাঠানো হয়েছে","de":"Der Bestätigungscode wird an Ihre aktuelle E-Mail-Adresse gesendet","en":"Verification code sent to your current email","es":"Código de verificación enviado a su correo electrónico actual","fr":"Code de vérification envoyé à votre adresse e-mail actuelle","hi":"सत्यापन कोड आपके वर्तमान ईमेल पर भेजा गया","id":"Kode verifikasi dikirim ke email Anda saat ini","pt-BR":"Código de verificação enviado para seu e-mail atual","ru":"Код подтверждения отправлен на ваш текущий адрес электронной почты","ur":"توثیقی کوڈ آپ کے موجودہ ای میل پر بھیجا گیا۔","zh-CN":"验证码已发送至您当前的邮箱"};

export function settings_account_email_currentverificationsent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
