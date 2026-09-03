import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتب ونظّم توثيقك.","bn":"আপনার ডক্স লিখুন এবং সংগঠিত করুন।","de":"Schreiben und organisieren Sie Ihre Dokumente.","en":"Write and organize your docs.","es":"Escribe y organiza tus documentos.","fr":"Rédigez et organisez vos documents.","hi":"अपने दस्तावेज़ लिखें और व्यवस्थित करें.","id":"Tulis dan atur dokumen Anda.","pt-BR":"Escreva e organize seus documentos.","ru":"Напишите и систематизируйте свои документы.","ur":"اپنے دستاویزات لکھیں اور منظم کریں۔","zh-CN":"编写和组织您的文档。"};

export function overview_link_editordesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
