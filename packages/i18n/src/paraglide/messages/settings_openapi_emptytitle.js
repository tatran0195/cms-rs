import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر مرجع API تفاعليًا","bn":"একটি ইন্টারেক্টিভ API রেফারেন্স প্রকাশ করুন","de":"Veröffentlichen Sie eine interaktive API-Referenz","en":"Publish an interactive API reference","es":"Publicar una referencia interactiva API","fr":"Publier une référence interactive API","hi":"एक इंटरैक्टिव API संदर्भ प्रकाशित करें","id":"Publikasikan referensi API interaktif","pt-BR":"Publique uma referência interativa API","ru":"Опубликовать интерактивную ссылку API","ur":"ایک متعامل API حوالہ شائع کریں۔","zh-CN":"发布交互式 API 参考"};

export function settings_openapi_emptytitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
