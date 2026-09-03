import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر وثائقك مباشرة بنقرة واحدة.","bn":"এক ক্লিকে আপনার ডক্স লাইভ পুশ করুন।","de":"Übertragen Sie Ihre Dokumente mit einem Klick live.","en":"Push your docs live with one click.","es":"Publique sus documentos en vivo con un solo clic.","fr":"Diffusez vos documents en direct en un seul clic.","hi":"एक क्लिक से अपने दस्तावेज़ लाइव करें।","id":"Dorong dokumen Anda langsung dengan satu klik.","pt-BR":"Envie seus documentos ao vivo com um clique.","ru":"Опубликуйте свои документы в прямом эфире одним щелчком мыши.","ur":"ایک کلک کے ساتھ اپنے دستاویزات کو لائیو پش کریں۔","zh-CN":"一键推送您的文档。"};

export function overview_nudge_step2desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
