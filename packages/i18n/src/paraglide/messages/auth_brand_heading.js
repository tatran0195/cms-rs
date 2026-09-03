import { getLocale } from '../runtime.js';

const translations = {"ar":"وثائقك مستضافة وجاهزة.","bn":"আপনার নথি, হোস্ট করা এবং প্রস্তুত।","de":"Ihre Dokumente, gehostet und bereit.","en":"Your docs, hosted and ready.","es":"Tus documentos, alojados y listos.","fr":"Vos documents, hébergés et prêts.","hi":"आपके दस्तावेज़ होस्ट और तैयार हैं।","id":"Dokumen Anda, dihosting dan siap.","pt-BR":"Seus documentos, hospedados e prontos.","ru":"Ваши документы размещены и готовы.","ur":"آپ کے دستاویزات، میزبان اور تیار ہیں۔","zh-CN":"您的文档已托管并准备就绪。"};

export function auth_brand_heading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
