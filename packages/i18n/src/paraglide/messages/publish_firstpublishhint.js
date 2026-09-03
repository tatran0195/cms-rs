import { getLocale } from '../runtime.js';

const translations = {"ar":"يتم نشر موقعك للمرة الأولى.","bn":"প্রথমবার আপনার সাইট প্রকাশ করা.","de":"Veröffentlichen Sie Ihre Website zum ersten Mal.","en":"Publishing your site for the first time.","es":"Publicar su sitio por primera vez.","fr":"Publier votre site pour la première fois.","hi":"पहली बार अपनी साइट प्रकाशित कर रहे हैं.","id":"Publikasikan situs Anda untuk pertama kalinya.","pt-BR":"Publicando seu site pela primeira vez.","ru":"Публикация вашего сайта впервые.","ur":"آپ کی سائٹ کو پہلی بار شائع کرنا۔","zh-CN":"第一次发布您的网站。"};

export function publish_firstpublishhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
