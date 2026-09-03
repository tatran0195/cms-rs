import { getLocale } from '../runtime.js';

const translations = {"ar":"نزّل ملف Markdown ZIP الأصلي","bn":"আসল Markdown জিপ ডাউনলোড করুন","de":"Laden Sie die Original-ZIP-Datei Markdown herunter","en":"Download the original Markdown ZIP","es":"Descargue el ZIP original Markdown","fr":"Téléchargez le ZIP original Markdown","hi":"मूल Markdown ज़िप डाउनलोड करें","id":"Unduh ZIP Markdown asli","pt-BR":"Baixe o ZIP Markdown original","ru":"Загрузите оригинальный ZIP-архив Markdown.","ur":"اصل Markdown ZIP ڈاؤن لوڈ کریں۔","zh-CN":"下载原始 Markdown ZIP"};

export function settings_exports_workflow_legacydownload(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
