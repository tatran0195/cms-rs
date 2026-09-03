import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة الإرسال خلال {seconds} ث","bn":"{seconds} সেকেন্ডে আবার পাঠান","de":"In {seconds}s erneut senden","en":"Resend in {seconds}s","es":"Reenviar en {seconds}s","fr":"Renvoyer dans {seconds}s","hi":"{seconds}s में पुनः भेजें","id":"Kirim ulang dalam {seconds}s","pt-BR":"Reenviar em {seconds}s","ru":"Отправить повторно через {seconds} с.","ur":"{seconds} میں دوبارہ بھیجیں۔","zh-CN":"在 {seconds}s 后重新发送"};

export function auth_otp_resendin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
