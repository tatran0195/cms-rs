import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر مرجع API تفاعليًا باستخدام Scalar من مستند OpenAPI 3.x.","bn":"একটি OpenAPI 3.x নথি থেকে একটি ইন্টারেক্টিভ Scalar API রেফারেন্স প্রকাশ করুন।","de":"Veröffentlichen Sie eine interaktive Scalar API-Referenz aus einem OpenAPI 3.x-Dokument.","en":"Publish an interactive Scalar API reference from an OpenAPI 3.x document.","es":"Publique una referencia interactiva Scalar API de un documento OpenAPI 3.x.","fr":"Publiez une référence interactive Scalar API à partir d'un document OpenAPI 3.x.","hi":"एक OpenAPI 3.x दस्तावेज़ से एक इंटरैक्टिव Scalar API संदर्भ प्रकाशित करें।","id":"Publikasikan referensi Scalar API interaktif dari dokumen OpenAPI 3.x.","pt-BR":"Publique uma referência interativa Scalar API de um documento OpenAPI 3.x.","ru":"Опубликуйте интерактивную ссылку Scalar API из документа OpenAPI 3.x.","ur":"ایک OpenAPI 3.x دستاویز سے ایک انٹرایکٹو Scalar API حوالہ شائع کریں۔","zh-CN":"从 OpenAPI 3.x 文档发布交互式 Scalar API 引用。"};

export function settings_openapi_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
