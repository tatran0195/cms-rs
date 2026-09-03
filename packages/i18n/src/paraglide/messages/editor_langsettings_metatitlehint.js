import { getLocale } from '../runtime.js';

const translations = {"ar":"يُستخدم في نمط العنوان «الصفحة — الموقع» لهذه اللغة.","bn":"এই ভাষার জন্য \"পৃষ্ঠা — সাইট\" শিরোনামের প্যাটার্নে ব্যবহার করা হয়েছে।","de":"Wird im Titelmuster „Seite – Site“ für diese Sprache verwendet.","en":"Used in the “Page — Site” title pattern for this language.","es":"Se utiliza en el patrón de título \"Página - Sitio\" para este idioma.","fr":"Utilisé dans le modèle de titre « Page — Site » pour cette langue.","hi":"इस भाषा के लिए \"पेज - साइट\" शीर्षक पैटर्न में उपयोग किया जाता है।","id":"Digunakan dalam pola judul “Halaman — Situs” untuk bahasa ini.","pt-BR":"Usado no padrão de título “Página – Site” para este idioma.","ru":"Используется в шаблоне заголовка «Страница — Сайт» для этого языка.","ur":"اس زبان کے لیے \"صفحہ — سائٹ\" ٹائٹل پیٹرن میں استعمال کیا جاتا ہے۔","zh-CN":"用于该语言的“页面 - 站点”标题模式。"};

export function editor_langsettings_metatitlehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
