import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد عنوان بريد إلكتروني للإرسال إليه.","bn":"পাঠানোর জন্য কোনো ইমেল ঠিকানা নেই৷","de":"Keine E-Mail-Adresse zum Senden vorhanden.","en":"No email address to send to.","es":"No hay dirección de correo electrónico a la que enviar.","fr":"Aucune adresse e-mail à laquelle envoyer.","hi":"भेजने के लिए कोई ईमेल पता नहीं.","id":"Tidak ada alamat email untuk dikirim.","pt-BR":"Nenhum endereço de e-mail para enviar.","ru":"Нет адреса электронной почты для отправки.","ur":"بھیجنے کے لیے کوئی ای میل پتہ نہیں۔","zh-CN":"没有要发送到的电子邮件地址。"};

export function auth_verify_noemail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
