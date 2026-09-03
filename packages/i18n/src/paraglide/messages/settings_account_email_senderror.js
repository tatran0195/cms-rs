import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إرسال رسالة التحقق","bn":"যাচাইকরণ ইমেল পাঠানো যায়নি","de":"Die Bestätigungs-E-Mail konnte nicht gesendet werden","en":"Could not send the verification email","es":"No se pudo enviar el correo electrónico de verificación","fr":"Impossible d'envoyer l'e-mail de vérification","hi":"सत्यापन ईमेल नहीं भेजा जा सका","id":"Tidak dapat mengirim email verifikasi","pt-BR":"Não foi possível enviar o e-mail de verificação","ru":"Не удалось отправить письмо с подтверждением","ur":"توثیقی ای میل نہیں بھیجی جا سکی","zh-CN":"无法发送验证电子邮件"};

export function settings_account_email_senderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
