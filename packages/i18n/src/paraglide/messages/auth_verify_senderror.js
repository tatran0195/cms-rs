import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إرسال الرمز. حاول إرسال رمز جديد.","bn":"কোড পাঠানো যায়নি. একটি নতুন পাঠানোর চেষ্টা করুন.","de":"Der Code konnte nicht gesendet werden. Bitte versuchen Sie, eine neue zu senden.","en":"The code could not be sent. Please try sending a new one.","es":"No se pudo enviar el código. Intente enviar uno nuevo.","fr":"Le code n'a pas pu être envoyé. Veuillez essayer d'en envoyer un nouveau.","hi":"कोड नहीं भेजा जा सका. कृपया एक नया भेजने का प्रयास करें.","id":"Kode tidak dapat dikirim. Silakan coba kirim yang baru.","pt-BR":"Não foi possível enviar o código. Por favor, tente enviar um novo.","ru":"Код не удалось отправить. Пожалуйста, попробуйте отправить новое.","ur":"کوڈ بھیجا نہیں جا سکا۔ براہ کرم ایک نیا بھیجنے کی کوشش کریں۔","zh-CN":"无法发送代码。请尝试发送新的。"};

export function auth_verify_senderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
