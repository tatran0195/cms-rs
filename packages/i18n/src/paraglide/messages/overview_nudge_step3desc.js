import { getLocale } from '../runtime.js';

const translations = {"ar":"قدّم الوثائق من نطاقك الخاص (اختياري).","bn":"আপনার নিজের ডোমেন থেকে ডক্স পরিবেশন করুন (ঐচ্ছিক)।","de":"Stellen Sie die Dokumente von Ihrer eigenen Domain aus bereit (optional).","en":"Serve the docs from your own domain (optional).","es":"Entregue los documentos desde su propio dominio (opcional).","fr":"Diffusez les documents de votre propre domaine (facultatif).","hi":"अपने स्वयं के डोमेन से दस्तावेज़ प्रस्तुत करें (वैकल्पिक)।","id":"Sajikan dokumen dari domain Anda sendiri (opsional).","pt-BR":"Sirva os documentos do seu próprio domínio (opcional).","ru":"Размещайте документы со своего домена (необязательно).","ur":"اپنے ڈومین سے دستاویزات پیش کریں (اختیاری)۔","zh-CN":"从您自己的域提供文档（可选）。"};

export function overview_nudge_step3desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
