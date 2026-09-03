import { getLocale } from '../runtime.js';

const translations = {"ar":"تنزيل","bn":"ডাউনলোড করুন","de":"Herunterladen","en":"Download","es":"Descargar","fr":"Télécharger","hi":"डाउनलोड करें","id":"Unduh","pt-BR":"Baixar","ru":"Скачать","ur":"ڈاؤن لوڈ کریں۔","zh-CN":"下载"};

export function settings_exportssection_download(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
