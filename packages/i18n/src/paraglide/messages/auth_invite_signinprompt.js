import { getLocale } from '../runtime.js';

const translations = {"ar":"سجّل الدخول أو أنشئ حسابًا لقبول هذه الدعوة.","bn":"এই আমন্ত্রণটি গ্রহণ করতে লগ ইন করুন বা একটি অ্যাকাউন্ট তৈরি করুন৷","de":"Melden Sie sich an oder erstellen Sie ein Konto, um diese Einladung anzunehmen.","en":"Log in or create an account to accept this invitation.","es":"Inicie sesión o cree una cuenta para aceptar esta invitación.","fr":"Connectez-vous ou créez un compte pour accepter cette invitation.","hi":"इस आमंत्रण को स्वीकार करने के लिए लॉग इन करें या एक खाता बनाएं।","id":"Masuk atau buat akun untuk menerima undangan ini.","pt-BR":"Faça login ou crie uma conta para aceitar este convite.","ru":"Войдите в систему или создайте учетную запись, чтобы принять это приглашение.","ur":"اس دعوت کو قبول کرنے کے لیے لاگ ان کریں یا ایک اکاؤنٹ بنائیں۔","zh-CN":"登录或创建帐户以接受此邀请。"};

export function auth_invite_signinprompt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
