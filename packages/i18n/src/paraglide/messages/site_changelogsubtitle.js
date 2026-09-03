import { getLocale } from '../runtime.js';

const translations = {"ar":"كل تحديث صدر لهذه الوثائق.","bn":"প্রতিটি আপডেট এই ডক্সে পাঠানো হয়।","de":"Jedes an diese Dokumente gelieferte Update.","en":"Every update shipped to these docs.","es":"Cada actualización enviada a estos documentos.","fr":"Chaque mise à jour envoyée à ces documents.","hi":"प्रत्येक अद्यतन इन दस्तावेज़ों पर भेजा जाता है।","id":"Setiap pembaruan dikirimkan ke dokumen ini.","pt-BR":"Cada atualização enviada para esses documentos.","ru":"Каждое обновление отправляется в эту документацию.","ur":"ہر اپ ڈیٹ ان دستاویزات کو بھیج دیا جاتا ہے۔","zh-CN":"每个更新都会发送到这些文档。"};

export function site_changelogsubtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
