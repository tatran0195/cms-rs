import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد كلمة مرور لإعادة تعيينها. أدخل بريدك الإلكتروني في صفحة تسجيل الدخول وسنرسل إليك رمزًا آمنًا لمرة واحدة.","bn":"রিসেট করার জন্য কোন পাসওয়ার্ড নেই। লগইন পৃষ্ঠায় আপনার ইমেল লিখুন এবং আমরা আপনাকে একটি নিরাপদ এক-বারের কোড পাঠাব।","de":"Es gibt kein Passwort zum Zurücksetzen. Geben Sie auf der Anmeldeseite Ihre E-Mail-Adresse ein und wir senden Ihnen einen sicheren Einmalcode.","en":"There is no password to reset. Enter your email on the login page and we will send you a secure one-time code.","es":"No hay contraseña para restablecer. Ingrese su correo electrónico en la página de inicio de sesión y le enviaremos un código seguro de un solo uso.","fr":"Il n'y a pas de mot de passe à réinitialiser. Entrez votre email sur la page de connexion et nous vous enverrons un code sécurisé à usage unique.","hi":"रीसेट करने के लिए कोई पासवर्ड नहीं है. लॉगिन पेज पर अपना ईमेल दर्ज करें और हम आपको एक सुरक्षित वन-टाइम कोड भेजेंगे।","id":"Tidak ada kata sandi untuk diatur ulang. Masukkan email Anda di halaman login dan kami akan mengirimkan Anda kode satu kali yang aman.","pt-BR":"Não há senha para redefinir. Digite seu e-mail na página de login e lhe enviaremos um código único e seguro.","ru":"Нет пароля для сброса. Введите свой адрес электронной почты на странице входа, и мы вышлем вам безопасный одноразовый код.","ur":"دوبارہ ترتیب دینے کے لیے کوئی پاس ورڈ نہیں ہے۔ لاگ ان پیج پر اپنا ای میل درج کریں اور ہم آپ کو ایک محفوظ کوڈ بھیجیں گے۔","zh-CN":"没有密码可以重置。在登录页面上输入您的电子邮件，我们将向您发送一个安全的一次性代码。"};

export function auth_passwordless_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
