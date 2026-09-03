import { getLocale } from '../runtime.js';

const translations = {"ar":"تصدير كل الوثائق (Markdown ‏.zip)","bn":"সমস্ত নথি রপ্তানি করুন (Markdown .zip)","de":"Alle Dokumente exportieren (Markdown .zip)","en":"Export all docs (Markdown .zip)","es":"Exportar todos los documentos (Markdown .zip)","fr":"Exporter tous les documents (Markdown .zip)","hi":"सभी दस्तावेज़ निर्यात करें (Markdown .zip)","id":"Ekspor semua dokumen (Markdown .zip)","pt-BR":"Exportar todos os documentos (Markdown .zip)","ru":"Экспортировать все документы (Markdown .zip)","ur":"تمام دستاویزات برآمد کریں (Markdown .zip)","zh-CN":"导出所有文档 (Markdown .zip)"};

export function settings_exportssection_markdown_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
