import { getLocale } from '../runtime.js';

const translations = {"ar":"يظهر أسفل العنوان وفي نتائج البحث.","bn":"শিরোনামের অধীনে এবং অনুসন্ধান ফলাফলে দেখানো হয়েছে৷","de":"Wird unter dem Titel und in den Suchergebnissen angezeigt.","en":"Shown under the title and in search results.","es":"Se muestra debajo del título y en los resultados de búsqueda.","fr":"Affiché sous le titre et dans les résultats de recherche.","hi":"शीर्षक के अंतर्गत और खोज परिणामों में दिखाया गया।","id":"Ditampilkan di bawah judul dan di hasil pencarian.","pt-BR":"Exibido sob o título e nos resultados da pesquisa.","ru":"Отображается под заголовком и в результатах поиска.","ur":"عنوان کے تحت اور تلاش کے نتائج میں دکھایا گیا ہے۔","zh-CN":"显示在标题下方和搜索结果中。"};

export function editor_pagesettings_descriptionplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
