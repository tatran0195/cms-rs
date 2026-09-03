import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إرسال رمز لمرة واحدة","bn":"একটি এককালীন কোড পাঠানো যায়নি","de":"Es konnte kein Einmalcode gesendet werden","en":"Could not send a one-time code","es":"No se pudo enviar un código de un solo uso","fr":"Impossible d'envoyer un code à usage unique","hi":"एक बार का कोड नहीं भेजा जा सका","id":"Tidak dapat mengirim kode satu kali","pt-BR":"Não foi possível enviar um código único","ru":"Не удалось отправить одноразовый код","ur":"ایک وقتی کوڈ نہیں بھیجا جا سکا","zh-CN":"无法发送一次性代码"};

export function auth_otp_senderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
