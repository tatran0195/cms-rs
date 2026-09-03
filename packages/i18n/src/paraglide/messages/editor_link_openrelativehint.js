import { getLocale } from '../runtime.js';

const translations = {"ar":"الروابط النسبية تُفتح على موقعك المنشور","bn":"আপনার প্রকাশিত সাইটে আপেক্ষিক লিঙ্ক খোলা","de":"Auf Ihrer veröffentlichten Website werden relative Links geöffnet","en":"Relative links open on your published site","es":"Enlaces relativos abiertos en su sitio publicado","fr":"Liens relatifs ouverts sur votre site publié","hi":"आपकी प्रकाशित साइट पर संबंधित लिंक खुलते हैं","id":"Tautan relatif terbuka di situs yang Anda terbitkan","pt-BR":"Links relativos abertos em seu site publicado","ru":"Относительные ссылки открываются на опубликованном вами сайте.","ur":"آپ کی شائع شدہ سائٹ پر متعلقہ لنکس کھلتے ہیں۔","zh-CN":"相关链接在您发布的网站上打开"};

export function editor_link_openrelativehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
