import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد صفحات باللغة الافتراضية للمقارنة","bn":"তুলনা করার জন্য কোনো ডিফল্ট-ভাষা পৃষ্ঠা নেই","de":"Keine Seiten in der Standardsprache zum Vergleichen","en":"No default-language pages to compare","es":"No hay páginas en el idioma predeterminado para comparar","fr":"Aucune page dans la langue par défaut à comparer","hi":"तुलना करने के लिए कोई डिफ़ॉल्ट-भाषा पृष्ठ नहीं","id":"Tidak ada halaman bahasa default untuk dibandingkan","pt-BR":"Nenhuma página no idioma padrão para comparar","ru":"Нет страниц на языке по умолчанию для сравнения.","ur":"موازنہ کرنے کے لیے پہلے سے طے شدہ زبان کے صفحات نہیں ہیں۔","zh-CN":"没有可比较的默认语言页面"};

export function settings_languages_coverage_nosourcepages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
