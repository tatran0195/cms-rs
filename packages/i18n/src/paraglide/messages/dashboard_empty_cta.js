import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ موقعك الأول","bn":"আপনার প্রথম সাইট তৈরি করুন","de":"Erstellen Sie Ihre erste Website","en":"Create your first site","es":"Crea tu primer sitio","fr":"Créez votre premier site","hi":"अपनी पहली साइट बनाएं","id":"Buat situs pertama Anda","pt-BR":"Crie seu primeiro site","ru":"Создайте свой первый сайт","ur":"اپنی پہلی سائٹ بنائیں","zh-CN":"创建您的第一个网站"};

export function dashboard_empty_cta(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
