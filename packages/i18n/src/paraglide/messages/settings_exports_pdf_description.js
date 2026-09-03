import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء نسخة PDF قابلة للتنزيل من التوثيق.","bn":"ডক্সের একটি ডাউনলোডযোগ্য PDF কপি তৈরি করুন।","de":"Erstellen Sie eine herunterladbare PDF-Kopie der Dokumente.","en":"Generate a downloadable PDF copy of the docs.","es":"Genere una copia descargable PDF de los documentos.","fr":"Générez une copie PDF téléchargeable des documents.","hi":"दस्तावेज़ों की डाउनलोड करने योग्य PDF प्रतिलिपि बनाएँ।","id":"Buat salinan dokumen PDF yang dapat diunduh.","pt-BR":"Gere uma cópia PDF dos documentos para download.","ru":"Создайте загружаемую PDF копию документов.","ur":"دستاویزات کی ایک ڈاؤن لوڈ کے قابل PDF کاپی بنائیں۔","zh-CN":"生成可下载的 PDF 文档副本。"};

export function settings_exports_pdf_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
