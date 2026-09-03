import { getLocale } from '../runtime.js';

const translations = {"ar":"صورة 1200×630 تُستخدم عند مشاركة هذه الصفحة (Open Graph / Twitter).","bn":"এই পৃষ্ঠাটি শেয়ার করার সময় একটি 1200×630 ছবি ব্যবহৃত হয় (ওপেন গ্রাফ/টুইটার)।","de":"Ein 1200×630-Bild, das beim Teilen dieser Seite verwendet wird (Open Graph / Twitter).","en":"A 1200×630 image used when this page is shared (Open Graph / Twitter).","es":"Una imagen de 1200×630 utilizada cuando se comparte esta página (Open Graph / Twitter).","fr":"Une image 1200×630 utilisée lorsque cette page est partagée (Open Graph / Twitter).","hi":"इस पृष्ठ को साझा करते समय 1200×630 छवि का उपयोग किया जाता है (ओपन ग्राफ़/ट्विटर)।","id":"Gambar berukuran 1200×630 yang digunakan saat halaman ini dibagikan (Open Graph / Twitter).","pt-BR":"Uma imagem de 1200×630 usada quando esta página é compartilhada (Open Graph/Twitter).","ru":"Изображение размером 1200×630, используемое при публикации этой страницы (Open Graph/Twitter).","ur":"ایک 1200×630 تصویر استعمال ہوتی ہے جب یہ صفحہ شیئر کیا جاتا ہے (اوپن گراف / ٹویٹر)۔","zh-CN":"共享此页面时使用的 1200×630 图像（Open Graph / Twitter）。"};

export function editor_pagesettings_ogimagehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
