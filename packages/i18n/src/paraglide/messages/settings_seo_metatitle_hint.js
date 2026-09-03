import { getLocale } from '../runtime.js';

const translations = {"ar":"العنوان المُستخدَم في نتائج البحث ومعاينات وسائل التواصل الاجتماعي.","bn":"অনুসন্ধান ফলাফল এবং সামাজিক পূর্বরূপ ব্যবহৃত শিরোনাম.","de":"Titel, der in Suchergebnissen und sozialen Vorschauen verwendet wird.","en":"Title used in search results and social previews.","es":"Título utilizado en los resultados de búsqueda y vistas previas sociales.","fr":"Titre utilisé dans les résultats de recherche et les aperçus sociaux.","hi":"खोज परिणामों और सामाजिक पूर्वावलोकनों में उपयोग किया गया शीर्षक।","id":"Judul yang digunakan dalam hasil pencarian dan pratinjau sosial.","pt-BR":"Título usado em resultados de pesquisa e visualizações sociais.","ru":"Название, используемое в результатах поиска и при предварительном просмотре в социальных сетях.","ur":"تلاش کے نتائج اور سماجی پیش نظارہ میں استعمال شدہ عنوان۔","zh-CN":"搜索结果和社交预览中使用的标题。"};

export function settings_seo_metatitle_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
