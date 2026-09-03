import { getLocale } from '../runtime.js';

const translations = {"ar":"تم الرفع","bn":"আপলোড করা হয়েছে","de":"Hochgeladen","en":"Uploaded","es":"subido","fr":"Téléchargé","hi":"अपलोड किया गया","id":"Diunggah","pt-BR":"Enviado","ru":"Загружено","ur":"اپ لوڈ کیا گیا","zh-CN":"已上传"};

export function settings_branding_uploaded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
