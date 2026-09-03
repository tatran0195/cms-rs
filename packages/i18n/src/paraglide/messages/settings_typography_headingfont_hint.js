import { getLocale } from '../runtime.js';

const translations = {"ar":"يُستخدم لعناوين الصفحات وعناوين الأقسام.","bn":"পৃষ্ঠা শিরোনাম এবং বিভাগ শিরোনাম জন্য ব্যবহৃত.","de":"Wird für Seitentitel und Abschnittsüberschriften verwendet.","en":"Used for page titles and section headings.","es":"Se utiliza para títulos de páginas y encabezados de secciones.","fr":"Utilisé pour les titres de page et les en-têtes de section.","hi":"पृष्ठ शीर्षकों और अनुभाग शीर्षकों के लिए उपयोग किया जाता है।","id":"Digunakan untuk judul halaman dan judul bagian.","pt-BR":"Usado para títulos de páginas e cabeçalhos de seção.","ru":"Используется для заголовков страниц и заголовков разделов.","ur":"صفحہ کے عنوانات اور سیکشن کی سرخیوں کے لیے استعمال کیا جاتا ہے۔","zh-CN":"用于页面标题和章节标题。"};

export function settings_typography_headingfont_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
