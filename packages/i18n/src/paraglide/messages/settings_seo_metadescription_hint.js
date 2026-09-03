import { getLocale } from '../runtime.js';

const translations = {"ar":"المقتطف الذي يظهر أسفل العنوان في نتائج البحث.","bn":"সার্চ ফলাফলে শিরোনামের নিচে দেখানো স্নিপেট।","de":"Der unter dem Titel in den Suchergebnissen angezeigte Ausschnitt.","en":"The snippet shown under the title in search results.","es":"El fragmento que se muestra debajo del título en los resultados de búsqueda.","fr":"L'extrait affiché sous le titre dans les résultats de recherche.","hi":"खोज परिणामों में शीर्षक के अंतर्गत दिखाया गया स्निपेट।","id":"Cuplikan yang ditampilkan di bawah judul pada hasil penelusuran.","pt-BR":"O snippet mostrado abaixo do título nos resultados da pesquisa.","ru":"Фрагмент, отображаемый под заголовком в результатах поиска.","ur":"تلاش کے نتائج میں عنوان کے نیچے دکھایا گیا ٹکڑا۔","zh-CN":"搜索结果标题下显示的代码片段。"};

export function settings_seo_metadescription_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
