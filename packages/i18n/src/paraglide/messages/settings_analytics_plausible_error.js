import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل نطاقًا مجرّدًا مثل docs.yoursite.com.","bn":"docs.yoursite.com এর মত একটি খালি ডোমেইন লিখুন।","de":"Geben Sie eine leere Domain wie docs.yoursite.com ein.","en":"Enter a bare domain like docs.yoursite.com.","es":"Ingrese un dominio simple como docs.yoursite.com.","fr":"Entrez un domaine nu comme docs.yoursite.com.","hi":"docs.yoursite.com जैसा कोई खाली डोमेन दर्ज करें।","id":"Masukkan domain kosong seperti docs.situsanda.com.","pt-BR":"Insira um domínio simples como docs.yoursite.com.","ru":"Введите пустой домен, например docs.yoursite.com.","ur":"ایک ننگا ڈومین درج کریں جیسے docs.yoursite.com۔","zh-CN":"输入一个裸域，例如 docs.yoursite.com。"};

export function settings_analytics_plausible_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
