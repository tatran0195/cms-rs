import { getLocale } from '../runtime.js';

const translations = {"ar":"قد نرسل إليك رابطًا عبر البريد الإلكتروني","bn":"আমরা আপনাকে একটি লিঙ্ক ইমেল করতে পারেন","de":"Möglicherweise senden wir Ihnen per E-Mail einen Link zu","en":"We may email you a link to","es":"Es posible que le enviemos por correo electrónico un enlace a","fr":"Nous pouvons vous envoyer par courrier électronique un lien vers","hi":"हम आपको एक लिंक ईमेल कर सकते हैं","id":"Kami mungkin mengirimi Anda email berisi tautan ke","pt-BR":"Podemos enviar-lhe por e-mail um link para","ru":"Мы можем отправить вам ссылку на","ur":"ہم آپ کو ایک لنک ای میل کر سکتے ہیں۔","zh-CN":"我们可能会通过电子邮件向您发送链接"};

export function auth_signup_verifynotice(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
