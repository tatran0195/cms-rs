import { getLocale } from '../runtime.js';

const translations = {"ar":"إبقاء هذه الصفحة خارج التنقّل.","bn":"এই পৃষ্ঠাটি নেভিগেশনের বাইরে রাখুন।","de":"Halten Sie diese Seite aus der Navigation heraus.","en":"Keep this page out of the navigation.","es":"Mantenga esta página fuera de la navegación.","fr":"Gardez cette page hors de la navigation.","hi":"इस पेज को नेविगेशन से बाहर रखें.","id":"Jauhkan halaman ini dari navigasi.","pt-BR":"Mantenha esta página fora da navegação.","ru":"Держите эту страницу подальше от навигации.","ur":"اس صفحہ کو نیویگیشن سے دور رکھیں۔","zh-CN":"将此页面排除在导航之外。"};

export function editor_pagesettings_hiddenhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
