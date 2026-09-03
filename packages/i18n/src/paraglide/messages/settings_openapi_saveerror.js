import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر حفظ مستند OpenAPI.","bn":"OpenAPI নথি সংরক্ষণ করা যায়নি৷","de":"Das Dokument OpenAPI konnte nicht gespeichert werden.","en":"Could not save the OpenAPI document.","es":"No se pudo guardar el documento OpenAPI.","fr":"Impossible d'enregistrer le document OpenAPI.","hi":"OpenAPI दस्तावेज़ सहेजा नहीं जा सका.","id":"Tidak dapat menyimpan dokumen OpenAPI.","pt-BR":"Não foi possível salvar o documento OpenAPI.","ru":"Не удалось сохранить документ OpenAPI.","ur":"OpenAPI دستاویز کو محفوظ نہیں کیا جا سکا۔","zh-CN":"无法保存 OpenAPI 文档。"};

export function settings_openapi_saveerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
