import { getLocale } from '../runtime.js';

const translations = {"ar":"أو الصق مستند OpenAPI بصيغة JSON/YAML…","bn":"অথবা একটি OpenAPI JSON/YAML নথি পেস্ট করুন...","de":"Oder fügen Sie ein OpenAPI JSON/YAML Dokument ein…","en":"Or paste an OpenAPI JSON/YAML document…","es":"O pegue un documento OpenAPI JSON/YAML…","fr":"Ou collez un document OpenAPI JSON/YAML…","hi":"या एक OpenAPI JSON/YAML दस्तावेज़ चिपकाएँ...","id":"Atau tempelkan dokumen OpenAPI JSON/YAML…","pt-BR":"Ou cole um documento OpenAPI JSON/YAML…","ru":"Или вставьте документ OpenAPI JSON/YAML…","ur":"یا ایک OpenAPI JSON/YAML دستاویز چسپاں کریں…","zh-CN":"或者粘贴 OpenAPI JSON/YAML 文档..."};

export function settings_openapi_pasteplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
