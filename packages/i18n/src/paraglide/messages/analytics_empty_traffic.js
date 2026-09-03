import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد زيارات بعد — انشر موقعًا وشاركه.","bn":"এখনো কোনো ট্রাফিক নেই — একটি সাইট প্রকাশ করুন এবং শেয়ার করুন।","de":"Noch kein Traffic – veröffentlichen Sie eine Website und teilen Sie sie.","en":"No traffic yet — publish a site and share it.","es":"Aún no hay tráfico: publique un sitio y compártalo.","fr":"Pas encore de trafic : publiez un site et partagez-le.","hi":"अभी तक कोई ट्रैफ़िक नहीं - एक साइट प्रकाशित करें और उसे साझा करें।","id":"Belum ada lalu lintas — publikasikan situs dan bagikan.","pt-BR":"Ainda não há tráfego – publique um site e compartilhe-o.","ru":"Трафика пока нет — опубликуйте сайт и поделитесь им.","ur":"ابھی تک کوئی ٹریفک نہیں — ایک سائٹ شائع کریں اور اس کا اشتراک کریں۔","zh-CN":"还没有流量——发布一个网站并分享。"};

export function analytics_empty_traffic(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
