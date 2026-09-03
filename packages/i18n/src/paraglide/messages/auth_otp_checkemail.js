import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل الرمز المرسل إلى {email}","bn":"{email} এ পাঠানো কোডটি লিখুন","de":"Geben Sie den an {email} gesendeten Code ein.","en":"Enter the code sent to {email}","es":"Ingrese el código enviado a {email}","fr":"Saisissez le code envoyé à {email}","hi":"{email} पर भेजा गया कोड दर्ज करें","id":"Masukkan kode yang dikirim ke {email}","pt-BR":"Digite o código enviado para {email}","ru":"Введите код, отправленный на {email}.","ur":"{email} کو بھیجا گیا کوڈ درج کریں","zh-CN":"输入发送到 {email} 的代码"};

export function auth_otp_checkemail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
