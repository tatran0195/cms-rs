import { getLocale } from '../runtime.js';

const translations = {"ar":"شريط قابل للإغلاق يظهر أعلى شريط التنقّل — مثالي للإعلانات.","bn":"একটি বাতিলযোগ্য স্ট্রিপ যা নেভিবারের উপরে দেখানো হয়েছে — ঘোষণার জন্য দুর্দান্ত।","de":"Über der Navigationsleiste wird ein entfernbarer Streifen angezeigt – ideal für Ankündigungen.","en":"A dismissible strip shown above the navbar — great for announcements.","es":"Una franja descartable que se muestra encima de la barra de navegación: ideal para anuncios.","fr":"Une bande pouvant être ignorée affichée au-dessus de la barre de navigation – idéale pour les annonces.","hi":"नेवबार के ऊपर दिखाई गई एक खारिज करने योग्य पट्टी - घोषणाओं के लिए बढ़िया।","id":"Strip yang dapat ditutup ditampilkan di atas bilah navigasi — bagus untuk pengumuman.","pt-BR":"Uma faixa descartável mostrada acima da barra de navegação – ótima para anúncios.","ru":"Отключаемая полоса, отображаемая над панелью навигации, отлично подходит для объявлений.","ur":"navbar کے اوپر دکھائے جانے والی ایک مسترد شدہ پٹی — اعلانات کے لیے بہترین۔","zh-CN":"导航栏上方显示的可关闭条带 - 非常适合发布公告。"};

export function settings_banner_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
