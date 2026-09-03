import { getLocale } from '../runtime.js';

const translations = {"ar":"تم التحقق من مستند OpenAPI وحفظه","bn":"OpenAPI নথি যাচাই করা হয়েছে এবং সংরক্ষিত হয়েছে৷","de":"OpenAPI Dokument validiert und gespeichert","en":"OpenAPI document validated and saved","es":"OpenAPI documento validado y guardado","fr":"Document OpenAPI validé et enregistré","hi":"OpenAPI दस्तावेज़ सत्यापित और सहेजा गया","id":"OpenAPI dokumen divalidasi dan disimpan","pt-BR":"OpenAPI documento validado e salvo","ru":"Документ OpenAPI проверен и сохранен.","ur":"OpenAPI دستاویز کی توثیق اور محفوظ کی گئی۔","zh-CN":"OpenAPI 文档已验证并保存"};

export function settings_openapi_saved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
