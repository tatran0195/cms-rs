import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل رمز التحقق من بريدك الإلكتروني لإكمال إعداد حسابك.","bn":"আপনার অ্যাকাউন্ট সেট আপ সম্পূর্ণ করতে আপনার ইমেল থেকে যাচাইকরণ কোড লিখুন।","de":"Geben Sie den Bestätigungscode aus Ihrer E-Mail ein, um die Einrichtung Ihres Kontos abzuschließen.","en":"Enter the verification code from your email to finish setting up your account.","es":"Ingrese el código de verificación de su correo electrónico para terminar de configurar su cuenta.","fr":"Entrez le code de vérification de votre e-mail pour terminer la configuration de votre compte.","hi":"अपना खाता सेटअप पूरा करने के लिए अपने ईमेल से सत्यापन कोड दर्ज करें।","id":"Masukkan kode verifikasi dari email Anda untuk menyelesaikan pengaturan akun Anda.","pt-BR":"Digite o código de verificação do seu e-mail para concluir a configuração da sua conta.","ru":"Введите код подтверждения из вашего электронного письма, чтобы завершить настройку учетной записи.","ur":"اپنے اکاؤنٹ کا سیٹ اپ مکمل کرنے کے لیے اپنے ای میل سے تصدیقی کوڈ درج کریں۔","zh-CN":"输入电子邮件中的验证码以完成帐户设置。"};

export function auth_verify_sentgeneric(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
