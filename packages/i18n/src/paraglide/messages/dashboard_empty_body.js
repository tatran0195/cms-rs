import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ أول موقع توثيق لك للبدء.","bn":"শুরু করতে আপনার প্রথম ডকুমেন্টেশন সাইট তৈরি করুন।","de":"Erstellen Sie zunächst Ihre erste Dokumentationsseite.","en":"Create your first documentation site to get started.","es":"Cree su primer sitio de documentación para comenzar.","fr":"Créez votre premier site de documentation pour commencer.","hi":"आरंभ करने के लिए अपनी पहली दस्तावेज़ीकरण साइट बनाएं।","id":"Buat situs dokumentasi pertama Anda untuk memulai.","pt-BR":"Crie seu primeiro site de documentação para começar.","ru":"Для начала создайте свой первый сайт документации.","ur":"شروع کرنے کے لیے اپنی پہلی دستاویزی سائٹ بنائیں۔","zh-CN":"创建您的第一个文档站点以开始使用。"};

export function dashboard_empty_body(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
