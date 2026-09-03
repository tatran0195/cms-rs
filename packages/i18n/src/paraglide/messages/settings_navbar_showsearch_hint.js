import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض حقل البحث ⌘K في الشريط العلوي.","bn":"উপরের বারে ⌘K অনুসন্ধান ক্ষেত্রটি প্রদর্শন করুন৷","de":"Zeigen Sie das ⌘K-Suchfeld in der oberen Leiste an.","en":"Display the ⌘K search field in the top bar.","es":"Muestra el campo de búsqueda ⌘K en la barra superior.","fr":"Affichez le champ de recherche ⌘K dans la barre supérieure.","hi":"शीर्ष बार में ⌘K खोज फ़ील्ड प्रदर्शित करें।","id":"Tampilkan kolom pencarian ⌘K di bilah atas.","pt-BR":"Exiba o campo de pesquisa ⌘K na barra superior.","ru":"Отобразите поле поиска ⌘K на верхней панели.","ur":"ٹاپ بار میں ⌘K سرچ فیلڈ ڈسپلے کریں۔","zh-CN":"在顶部栏中显示 ⌘K 搜索字段。"};

export function settings_navbar_showsearch_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
