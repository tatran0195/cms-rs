import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر صفحة من التنقّل، أو أنشئ صفحة جديدة.","bn":"নেভিগেশন থেকে একটি পৃষ্ঠা চয়ন করুন, বা একটি তৈরি করুন৷","de":"Wählen Sie eine Seite aus der Navigation aus oder erstellen Sie eine.","en":"Pick a page from the navigation, or create one.","es":"Elija una página de la navegación o cree una.","fr":"Choisissez une page dans la navigation ou créez-en une.","hi":"नेविगेशन से एक पेज चुनें, या एक बनाएं।","id":"Pilih halaman dari navigasi, atau buat halaman.","pt-BR":"Escolha uma página na navegação ou crie uma.","ru":"Выберите страницу в навигации или создайте ее.","ur":"نیویگیشن سے ایک صفحہ منتخب کریں، یا ایک تخلیق کریں۔","zh-CN":"从导航中选择一个页面，或创建一个页面。"};

export function editor_nopageselectedhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
