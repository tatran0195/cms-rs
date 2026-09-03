import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد فرق في المحتوى لهذه الصفحة.","bn":"এই পৃষ্ঠার জন্য কোন বিষয়বস্তুর পার্থক্য নেই।","de":"Für diese Seite gibt es keinen Inhaltsunterschied.","en":"No content diff for this page.","es":"No hay diferencias de contenido para esta página.","fr":"Aucune différence de contenu pour cette page.","hi":"इस पृष्ठ के लिए कोई सामग्री भिन्न नहीं है.","id":"Tidak ada perbedaan konten untuk halaman ini.","pt-BR":"Nenhuma diferença de conteúdo para esta página.","ru":"На этой странице нет разницы в содержимом.","ur":"اس صفحہ کے لیے مواد میں کوئی فرق نہیں ہے۔","zh-CN":"此页面没有内容差异。"};

export function publish_nolinediff(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
