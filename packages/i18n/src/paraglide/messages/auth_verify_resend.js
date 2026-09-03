import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة إرسال الرمز","bn":"কোড আবার পাঠান","de":"Code erneut senden","en":"Resend code","es":"Reenviar código","fr":"Renvoyer le code","hi":"कोड पुनः भेजें","id":"Kirim ulang kode","pt-BR":"Reenviar código","ru":"Отправить код повторно","ur":"کوڈ دوبارہ بھیجیں۔","zh-CN":"重新发送代码"};

export function auth_verify_resend(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
