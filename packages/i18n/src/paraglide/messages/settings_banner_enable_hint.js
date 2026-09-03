import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار شريط الإعلان في كل صفحة.","bn":"প্রতিটি পৃষ্ঠায় ঘোষণা ব্যানার দেখান.","de":"Zeigen Sie das Ankündigungsbanner auf jeder Seite an.","en":"Show the announcement banner on every page.","es":"Muestre el banner del anuncio en cada página.","fr":"Afficher la bannière d'annonce sur chaque page.","hi":"प्रत्येक पृष्ठ पर घोषणा बैनर दिखाएँ।","id":"Tampilkan spanduk pengumuman di setiap halaman.","pt-BR":"Mostre o banner de anúncio em todas as páginas.","ru":"Покажите баннер объявления на каждой странице.","ur":"ہر صفحے پر اعلان بینر دکھائیں۔","zh-CN":"在每个页面上显示公告横幅。"};

export function settings_banner_enable_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
