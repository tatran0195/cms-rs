import { getLocale } from '../runtime.js';

const translations = {"ar":"اتركه فارغًا لاستخدام نص البحث المترجم للغة القارئ النشطة.","bn":"অনুসন্ধান ক্ষেত্রের ভিতরে দেখানো ইঙ্গিত পাঠ্য।","de":"Hinweistext, der im Suchfeld angezeigt wird.","en":"Leave empty to use the localized search prompt for the reader’s active language.","es":"Texto de sugerencia que se muestra dentro del campo de búsqueda.","fr":"Texte d’indice affiché dans le champ de recherche.","hi":"संकेत पाठ खोज फ़ील्ड के अंदर दिखाया गया है।","id":"Teks petunjuk ditampilkan di dalam bidang pencarian.","pt-BR":"Texto de dica mostrado dentro do campo de pesquisa.","ru":"Текст подсказки, отображаемый внутри поля поиска.","ur":"اشارے کا متن تلاش کے میدان میں دکھایا گیا ہے۔","zh-CN":"搜索字段内显示的提示文本。"};

export function settings_search_placeholder_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
