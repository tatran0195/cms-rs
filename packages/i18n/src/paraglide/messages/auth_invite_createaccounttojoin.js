import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ حسابك للانضمام","bn":"যোগ দিতে আপনার অ্যাকাউন্ট তৈরি করুন","de":"Erstellen Sie Ihr Konto, um beizutreten","en":"Create your account to join","es":"Crea tu cuenta para unirte","fr":"Créez votre compte pour adhérer","hi":"शामिल होने के लिए अपना खाता बनाएं","id":"Buat akun Anda untuk bergabung","pt-BR":"Crie sua conta para participar","ru":"Создайте свою учетную запись, чтобы присоединиться","ur":"شامل ہونے کے لیے اپنا اکاؤنٹ بنائیں","zh-CN":"创建您的帐户以加入"};

export function auth_invite_createaccounttojoin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
