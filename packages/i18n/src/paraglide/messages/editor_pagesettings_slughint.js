import { getLocale } from '../runtime.js';

const translations = {"ar":"جزء عنوان URL الخاص بالصفحة على الموقع المنشور.","bn":"প্রকাশিত সাইটে পৃষ্ঠার URL সেগমেন্ট।","de":"Das URL-Segment der Seite auf der veröffentlichten Website.","en":"The page's URL segment on the published site.","es":"El segmento de URL de la página en el sitio publicado.","fr":"Segment d'URL de la page sur le site publié.","hi":"प्रकाशित साइट पर पृष्ठ का यूआरएल खंड।","id":"Segmen URL halaman di situs yang dipublikasikan.","pt-BR":"O segmento de URL da página no site publicado.","ru":"Сегмент URL-адреса страницы опубликованного сайта.","ur":"شائع شدہ سائٹ پر صفحہ کا URL سیگمنٹ۔","zh-CN":"已发布网站上页面的 URL 段。"};

export function editor_pagesettings_slughint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
