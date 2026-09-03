import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل الرمز المكوّن من 6 أرقام الذي أرسلناه إلى","bn":"আমরা যে 6-সংখ্যার কোডটি পাঠিয়েছি তা লিখুন","de":"Geben Sie den 6-stelligen Code ein, den wir Ihnen gesendet haben","en":"Enter the 6-digit code we sent to","es":"Ingresa el código de 6 dígitos que te enviamos","fr":"Entrez le code à 6 chiffres que nous avons envoyé","hi":"हमारे द्वारा भेजा गया 6-अंकीय कोड दर्ज करें","id":"Masukkan kode 6 digit yang kami kirimkan","pt-BR":"Digite o código de 6 dígitos que enviamos para","ru":"Введите 6-значный код, который мы отправили","ur":"6 ہندسوں کا کوڈ درج کریں جسے ہم نے بھیجا ہے۔","zh-CN":"输入我们发送至的 6 位数代码"};

export function auth_verify_sentto(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
