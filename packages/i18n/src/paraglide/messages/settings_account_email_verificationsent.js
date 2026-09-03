import { getLocale } from '../runtime.js';

const translations = {"ar":"أُرسل رمز التحقق إلى {email}","bn":"যাচাইকরণ কোড {email} এ পাঠানো হয়েছে","de":"Bestätigungscode an {email} gesendet","en":"Verification code sent to {email}","es":"Código de verificación enviado a {email}","fr":"Code de vérification envoyé à {email}","hi":"सत्यापन कोड {email} पर भेजा गया","id":"Kode verifikasi dikirim ke {email}","pt-BR":"Código de verificação enviado para {email}","ru":"Код подтверждения отправлен на {email}.","ur":"توثیقی کوڈ {email} کو بھیجا گیا","zh-CN":"验证码发送至{email}"};

export function settings_account_email_verificationsent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
