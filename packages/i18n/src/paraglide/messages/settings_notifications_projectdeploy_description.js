import { getLocale } from '../runtime.js';

const translations = {"ar":"عند انتهاء نشر الموقع.","bn":"যখন একটি সাইট প্রকাশ শেষ হয়.","de":"Wenn die Veröffentlichung einer Website abgeschlossen ist.","en":"When a site finishes publishing.","es":"Cuando un sitio termina de publicarse.","fr":"Lorsqu'un site termine sa publication.","hi":"जब कोई साइट प्रकाशन समाप्त कर लेती है.","id":"Saat situs selesai dipublikasikan.","pt-BR":"Quando um site termina de ser publicado.","ru":"Когда сайт завершает публикацию.","ur":"جب کوئی سائٹ اشاعت مکمل کر لیتی ہے۔","zh-CN":"当网站完成发布时。"};

export function settings_notifications_projectdeploy_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
