import { getLocale } from '../runtime.js';

const translations = {"ar":"وثائقك ليست منشورة بعد","bn":"আপনার ডক্স এখনও লাইভ নয়","de":"Ihre Dokumente sind noch nicht online","en":"Your docs are not live yet","es":"Tus documentos aún no están disponibles","fr":"Vos documents ne sont pas encore en ligne","hi":"आपके दस्तावेज़ अभी तक लाइव नहीं हैं","id":"Dokumen Anda belum aktif","pt-BR":"Seus documentos ainda não estão ativos","ru":"Ваши документы еще не опубликованы","ur":"آپ کے دستاویزات ابھی لائیو نہیں ہیں۔","zh-CN":"您的文档尚未上线"};

export function overview_nudge_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
