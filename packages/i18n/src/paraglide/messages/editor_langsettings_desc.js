import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات تحسين محركات البحث والسلوك لكل صفحات هذه اللغة.","bn":"এই ভাষার প্রতিটি পৃষ্ঠার জন্য SEO ডিফল্ট এবং আচরণ।","de":"SEO Standardeinstellungen und Verhalten für jede Seite in dieser Sprache.","en":"SEO defaults and behaviour for every page in this language.","es":"SEO valores predeterminados y comportamiento para cada página en este idioma.","fr":"SEO valeurs par défaut et comportement pour chaque page dans cette langue.","hi":"SEO इस भाषा में प्रत्येक पृष्ठ के लिए डिफ़ॉल्ट और व्यवहार।","id":"SEO default dan perilaku untuk setiap halaman dalam bahasa ini.","pt-BR":"SEO padrões e comportamento para cada página neste idioma.","ru":"SEO значения по умолчанию и поведение для каждой страницы на этом языке.","ur":"SEO اس زبان میں ہر صفحہ کے لیے ڈیفالٹس اور برتاؤ۔","zh-CN":"该语言中每个页面的 SEO 默认值和行为。"};

export function editor_langsettings_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
