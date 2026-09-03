import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط إسناد صغير في تذييل الموقع المنشور.","bn":"প্রকাশিত সাইটের ফুটারে একটি ছোট অ্যাট্রিবিউশন লিঙ্ক।","de":"Ein kleiner Attributionslink in der Fußzeile der veröffentlichten Website.","en":"A small attribution link in the published site footer.","es":"Un pequeño enlace de atribución en el pie de página del sitio publicado.","fr":"Un petit lien d'attribution dans le pied de page du site publié.","hi":"प्रकाशित साइट फ़ूटर में एक छोटा सा एट्रिब्यूशन लिंक।","id":"Tautan atribusi kecil di footer situs yang dipublikasikan.","pt-BR":"Um pequeno link de atribuição no rodapé do site publicado.","ru":"Небольшая ссылка на авторство в футере опубликованного сайта.","ur":"شائع شدہ سائٹ کے فوٹر میں ایک چھوٹا انتساب کا لنک۔","zh-CN":"已发布网站页脚中的小归因链接。"};

export function settings_footer_badge_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
