import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل رابط خطاف ويب صالحًا للمزوّد.","bn":"একটি বৈধ প্রদানকারীর ওয়েবহুক URL লিখুন ।","de":"Geben Sie eine gültige Anbieter-Webhook-URL ein.","en":"Enter a valid provider webhook URL.","es":"Introduzca una URL de webhook válida para el proveedor.","fr":"Saisissez une URL valide de webhook du fournisseur.","hi":"एक वैध प्रदाता वेबहुक यूआरएल दर्ज करें।","id":"Masukkan URL webhook penyedia yang valid.","pt-BR":"Digite um URL webhook de provedor válido.","ru":"Введите действительный URL вебхука провайдера.","ur":"ایک درست فراہم کنندہ ویب ہک URL درج کریں ۔","zh-CN":"输入有效的供应商 Webhook URL 。"};

export function settings_integrations_webhookrequired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
