import { getLocale } from '../runtime.js';

const translations = {"ar":"الوثائق","bn":"ডক্স","de":"Dokumente","en":"Docs","es":"Documentos","fr":"Documents","hi":"दस्तावेज़","id":"dokumen","pt-BR":"Documentos","ru":"Документы","ur":"دستاویزات","zh-CN":"文档"};

export function site_docs(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
