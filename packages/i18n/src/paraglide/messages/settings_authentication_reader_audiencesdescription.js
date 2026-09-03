import { getLocale } from '../runtime.js';

const translations = {"ar":"امنح جمهورًا الموقع كاملًا أو حدّد صفحات بعينها. تتم تصفية التنقل والبحث على الخادم.","bn":"একটি শ্রোতা সমগ্র সাইট মঞ্জুরি, বা পৃথক পৃষ্ঠা নির্বাচন করুন. নেভিগেশন এবং অনুসন্ধান সার্ভার-সাইড ফিল্টার করা হয়.","de":"Gewähren Sie einem Publikum die gesamte Website oder wählen Sie einzelne Seiten aus. Navigation und Suche werden serverseitig gefiltert.","en":"Grant an audience the whole site, or select individual pages. Navigation and search are filtered server-side.","es":"Otorgue a una audiencia todo el sitio o seleccione páginas individuales. La navegación y la búsqueda se filtran en el lado del servidor.","fr":"Accordez à une audience l’intégralité du site ou sélectionnez des pages individuelles. La navigation et la recherche sont filtrées côté serveur.","hi":"दर्शकों को पूरी साइट प्रदान करें, या अलग-अलग पेज चुनें। नेविगेशन और खोज सर्वर-साइड फ़िल्टर किए गए हैं।","id":"Berikan audiens seluruh situs, atau pilih halaman individual. Navigasi dan pencarian difilter di sisi server.","pt-BR":"Conceda ao público todo o site ou selecione páginas individuais. A navegação e a pesquisa são filtradas no lado do servidor.","ru":"Предоставьте аудитории весь сайт или выберите отдельные страницы. Навигация и поиск фильтруются на стороне сервера.","ur":"سامعین کو پوری سائٹ دیں، یا انفرادی صفحات منتخب کریں۔ نیویگیشن اور سرچ فلٹر شدہ سرور سائیڈ ہیں۔","zh-CN":"向受众授予整个网站的权限，或选择单个页面。导航和搜索在服务器端进行过滤。"};

export function settings_authentication_reader_audiencesdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
