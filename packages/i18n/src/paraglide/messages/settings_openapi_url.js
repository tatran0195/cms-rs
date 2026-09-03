import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط المستند العام","bn":"সর্বজনীন নথি URL","de":"Öffentliche Dokument-URL","en":"Public document URL","es":"URL del documento público","fr":"URL du document public","hi":"सार्वजनिक दस्तावेज़ यूआरएल","id":"URL dokumen publik","pt-BR":"URL do documento público","ru":"URL общедоступного документа","ur":"عوامی دستاویز کا URL","zh-CN":"公开文档网址"};

export function settings_openapi_url(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
