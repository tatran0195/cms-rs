import { getLocale } from '../runtime.js';

const translations = {"ar":"لم نعد نستخدم روابط إعادة تعيين كلمة المرور. سجّل الدخول برمز آمن لمرة واحدة يُرسل إلى بريدك الإلكتروني.","bn":"পাসওয়ার্ড রিসেট লিঙ্ক আর ব্যবহার করা হয় না. আপনার ইমেলে পাঠানো একটি নিরাপদ এক-বারের কোড দিয়ে লগ ইন করুন।","de":"Links zum Zurücksetzen des Passworts werden nicht mehr verwendet. Melden Sie sich mit einem sicheren Einmalcode an, der an Ihre E-Mail-Adresse gesendet wird.","en":"Password reset links are no longer used. Log in with a secure one-time code sent to your email.","es":"Los enlaces para restablecer contraseña ya no se utilizan. Inicie sesión con un código seguro de un solo uso enviado a su correo electrónico.","fr":"Les liens de réinitialisation de mot de passe ne sont plus utilisés. Connectez-vous avec un code sécurisé à usage unique envoyé à votre adresse e-mail.","hi":"पासवर्ड रीसेट लिंक का अब उपयोग नहीं किया जाता. आपके ईमेल पर भेजे गए सुरक्षित वन-टाइम कोड के साथ लॉग इन करें।","id":"Tautan pengaturan ulang kata sandi tidak lagi digunakan. Masuk dengan kode satu kali aman yang dikirimkan ke email Anda.","pt-BR":"Os links de redefinição de senha não são mais usados. Faça login com um código único seguro enviado para seu e-mail.","ru":"Ссылки для сброса пароля больше не используются. Войдите в систему с помощью безопасного одноразового кода, отправленного на вашу электронную почту.","ur":"پاس ورڈ دوبارہ ترتیب دینے کے لنکس اب استعمال نہیں کیے جاتے ہیں۔ آپ کے ای میل پر بھیجے گئے ایک محفوظ کوڈ کے ساتھ لاگ ان کریں۔","zh-CN":"不再使用密码重置链接。使用发送到您的电子邮件的安全一次性代码登录。"};

export function auth_passwordless_oldlink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
