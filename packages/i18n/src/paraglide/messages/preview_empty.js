import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد صفحات مسودة متاحة للمعاينة.","bn":"প্রিভিউ করার জন্য কোনো খসড়া পৃষ্ঠা নেই।","de":"Es stehen keine Entwurfsseiten zur Vorschau zur Verfügung.","en":"No draft pages are available to preview.","es":"No hay borradores de páginas disponibles para obtener una vista previa.","fr":"Aucun brouillon de page n'est disponible pour un aperçu.","hi":"पूर्वावलोकन के लिए कोई ड्राफ्ट पृष्ठ उपलब्ध नहीं है।","id":"Tidak ada halaman draf yang tersedia untuk dipratinjau.","pt-BR":"Nenhuma página de rascunho está disponível para visualização.","ru":"Черновые страницы недоступны для предварительного просмотра.","ur":"پیش نظارہ کے لیے کوئی مسودہ صفحہ دستیاب نہیں ہے۔","zh-CN":"没有草稿页面可供预览。"};

export function preview_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
