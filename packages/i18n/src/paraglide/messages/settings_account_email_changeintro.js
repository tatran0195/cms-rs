import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل عنوان بريد إلكتروني جديد. سنتحقق من عنوانك الحالي، ثم نرسل رمزًا إلى العنوان الجديد.","bn":"একটি নতুন ইমেল ঠিকানা লিখুন. আমরা আপনার বর্তমান ঠিকানা যাচাই করব, তারপর নতুন ঠিকানায় একটি কোড পাঠাব।","de":"Geben Sie eine neue E-Mail-Adresse ein. Wir überprüfen Ihre aktuelle Adresse und senden dann einen Code an die neue.","en":"Enter a new email address. We'll verify your current address, then send a code to the new one.","es":"Ingrese una nueva dirección de correo electrónico. Verificaremos su dirección actual y luego enviaremos un código a la nueva.","fr":"Saisissez une nouvelle adresse e-mail. Nous vérifierons votre adresse actuelle, puis enverrons un code à la nouvelle.","hi":"एक नया ईमेल पता दर्ज करें. हम आपके वर्तमान पते को सत्यापित करेंगे, फिर नए पते पर एक कोड भेजेंगे।","id":"Masukkan alamat email baru. Kami akan memverifikasi alamat Anda saat ini, lalu mengirimkan kode ke alamat baru.","pt-BR":"Insira um novo endereço de e-mail. Verificaremos seu endereço atual e enviaremos um código para o novo.","ru":"Введите новый адрес электронной почты. Мы проверим ваш текущий адрес, а затем отправим код на новый.","ur":"ایک نیا ای میل ایڈریس درج کریں۔ ہم آپ کے موجودہ پتے کی تصدیق کریں گے، پھر نئے پر ایک کوڈ بھیجیں گے۔","zh-CN":"输入新的电子邮件地址。我们将验证您当前的地址，然后将代码发送到新地址。"};

export function settings_account_email_changeintro(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
