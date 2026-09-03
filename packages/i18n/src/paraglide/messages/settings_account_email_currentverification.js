import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل الرمز المرسل إلى عنوانك الحالي، {email}، قبل المتابعة.","bn":"চালিয়ে যাওয়ার আগে আপনার বর্তমান ঠিকানা, {email}-এ পাঠানো কোডটি লিখুন।","de":"Geben Sie den an Ihre aktuelle Adresse gesendeten Code {email} ein, bevor Sie fortfahren.","en":"Enter the code sent to your current address, {email}, before continuing.","es":"Ingrese el código enviado a su dirección actual, {email}, antes de continuar.","fr":"Saisissez le code envoyé à votre adresse actuelle, {email}, avant de continuer.","hi":"जारी रखने से पहले, अपने वर्तमान पते, {email} पर भेजा गया कोड दर्ज करें।","id":"Masukkan kode yang dikirimkan ke alamat Anda saat ini, {email}, sebelum melanjutkan.","pt-BR":"Digite o código enviado para seu endereço atual, {email}, antes de continuar.","ru":"Прежде чем продолжить, введите код, отправленный на ваш текущий адрес, {email}.","ur":"جاری رکھنے سے پہلے اپنے موجودہ پتے {email} پر بھیجا گیا کوڈ درج کریں۔","zh-CN":"输入发送到您当前地址的代码 {email}，然后继续。"};

export function settings_account_email_currentverification(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
