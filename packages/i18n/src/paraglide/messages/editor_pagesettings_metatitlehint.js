import { getLocale } from '../runtime.js';

const translations = {"ar":"يتجاوز عنوان التبويب ونتائج البحث لهذه الصفحة.","bn":"এই পৃষ্ঠার জন্য ব্রাউজার ট্যাব + অনুসন্ধান-ফলাফল শিরোনাম ওভাররাইড করে।","de":"Überschreibt den Browser-Tab + Suchergebnistitel für diese Seite.","en":"Overrides the browser tab + search-result title for this page.","es":"Anula la pestaña del navegador + el título del resultado de búsqueda de esta página.","fr":"Remplace l'onglet du navigateur + le titre du résultat de recherche pour cette page.","hi":"इस पृष्ठ के लिए ब्राउज़र टैब + खोज-परिणाम शीर्षक को ओवरराइड करता है।","id":"Menggantikan tab browser + judul hasil pencarian untuk halaman ini.","pt-BR":"Substitui a guia do navegador + o título do resultado da pesquisa desta página.","ru":"Переопределяет вкладку браузера + заголовок результата поиска для этой страницы.","ur":"اس صفحہ کے لیے براؤزر ٹیب + تلاش کے نتائج کے عنوان کو اوور رائیڈ کرتا ہے۔","zh-CN":"覆盖此页面的浏览器选项卡+搜索结果标题。"};

export function editor_pagesettings_metatitlehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
