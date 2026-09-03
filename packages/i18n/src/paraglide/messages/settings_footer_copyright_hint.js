import { getLocale } from '../runtime.js';

const translations = {"ar":"يظهر في أسفل كل صفحة.","bn":"প্রতিটি পৃষ্ঠার নীচে দেখানো হয়েছে।","de":"Wird unten auf jeder Seite angezeigt.","en":"Shown at the bottom of every page.","es":"Se muestra en la parte inferior de cada página.","fr":"Affiché au bas de chaque page.","hi":"प्रत्येक पृष्ठ के नीचे दिखाया गया है।","id":"Ditampilkan di bagian bawah setiap halaman.","pt-BR":"Mostrado na parte inferior de cada página.","ru":"Отображается внизу каждой страницы.","ur":"ہر صفحے کے نیچے دکھایا گیا ہے۔","zh-CN":"显示在每个页面的底部。"};

export function settings_footer_copyright_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
