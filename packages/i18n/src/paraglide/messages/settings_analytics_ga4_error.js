import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل معرّف GA4 صالحًا مثل G-XXXXXXXXXX.","bn":"G-XXXXXXXXXX-এর মতো একটি বৈধ GA4 আইডি লিখুন।","de":"Geben Sie eine gültige GA4-ID wie G-XXXXXXXXXX ein.","en":"Enter a valid GA4 ID like G-XXXXXXXXXX.","es":"Ingrese una ID GA4 válida como G-XXXXXXXXXX.","fr":"Saisissez un identifiant GA4 valide tel que G-XXXXXXXXXX.","hi":"G-XXXXXXXXXX जैसी मान्य GA4 आईडी दर्ज करें।","id":"Masukkan ID GA4 yang valid seperti G-XXXXXXXXXX.","pt-BR":"Insira um ID GA4 válido, como G-XXXXXXXXXX.","ru":"Введите действительный идентификатор GA4, например G-XXXXXXXXXX.","ur":"ایک درست GA4 ID درج کریں جیسے G-XXXXXXXXXX۔","zh-CN":"输入有效的 GA4 ID，例如 G-XXXXXXXXXX。"};

export function settings_analytics_ga4_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
