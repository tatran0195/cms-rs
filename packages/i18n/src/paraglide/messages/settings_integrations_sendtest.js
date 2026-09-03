import { getLocale } from '../runtime.js';

const translations = {"ar":"إرسال اختبار","bn":"পরীক্ষা পাঠান","de":"Test versenden","en":"Send test","es":"Enviar prueba","fr":"Envoyer l'essai","hi":"जांच भेजें","id":"Kirim tes","pt-BR":"Enviar teste","ru":"Отправить тест","ur":"ٹیسٹ بھیجیں","zh-CN":"发送测试"};

export function settings_integrations_sendtest(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
