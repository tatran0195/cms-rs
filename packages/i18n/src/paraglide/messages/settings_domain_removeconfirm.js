import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة {domain}؟ سيتوقف موقعك عن العمل على ذلك العنوان.","bn":"{domain} সরান? আপনার সাইট সেই ঠিকানায় পরিবেশন করা বন্ধ করবে।","de":"{domain} entfernen? Ihre Website wird unter dieser Adresse nicht mehr bereitgestellt.","en":"Remove {domain}? Your site will stop serving at that address.","es":"¿Eliminar {domain}? Su sitio dejará de funcionar en esa dirección.","fr":"Supprimer {domain} ? Votre site cessera de servir à cette adresse.","hi":"{domain} हटाएं? आपकी साइट उस पते पर सेवा देना बंद कर देगी.","id":"Hapus {domain}? Situs Anda akan berhenti ditayangkan di alamat tersebut.","pt-BR":"Remover {domain}? Seu site deixará de ser veiculado nesse endereço.","ru":"Удалить {domain}? Ваш сайт перестанет обслуживаться по этому адресу.","ur":"{domain} کو ہٹائیں؟ آپ کی سائٹ اس پتے پر پیش کرنا بند کر دے گی۔","zh-CN":"删除 {domain}？您的网站将停止在该地址上提供服务。"};

export function settings_domain_removeconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
