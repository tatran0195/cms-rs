import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر تغييراتك فوراً على نطاقك.","bn":"আপনার পরিবর্তনগুলি তাৎক্ষণিকভাবে আপনার ডোমেনে লাইভ হবে৷","de":"Ihre Änderungen werden sofort auf Ihrer Domain wirksam.","en":"Your changes go live instantly on your domain.","es":"Sus cambios se activan instantáneamente en su dominio.","fr":"Vos modifications sont mises en ligne instantanément sur votre domaine.","hi":"आपके परिवर्तन आपके डोमेन पर तुरंत लाइव हो जाते हैं।","id":"Perubahan Anda langsung ditayangkan di domain Anda.","pt-BR":"Suas alterações serão publicadas instantaneamente em seu domínio.","ru":"Ваши изменения мгновенно вступают в силу в вашем домене.","ur":"آپ کی تبدیلیاں آپ کے ڈومین پر فوری طور پر لائیو ہو جاتی ہیں۔","zh-CN":"您的更改会立即在您的域上生效。"};

export function publish_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
