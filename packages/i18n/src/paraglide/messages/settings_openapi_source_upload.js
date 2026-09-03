import { getLocale } from '../runtime.js';

const translations = {"ar":"رفع","bn":"আপলোড করুন","de":"Hochladen","en":"Upload","es":"Subir","fr":"Télécharger","hi":"अपलोड करें","id":"Unggah","pt-BR":"Carregar","ru":"Загрузить","ur":"اپ لوڈ کریں۔","zh-CN":"上传"};

export function settings_openapi_source_upload(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
