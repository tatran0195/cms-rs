import { getLocale } from '../runtime.js';

const translations = {"ar":"نشر","bn":"প্রকাশ করুন","de":"Veröffentlichen","en":"Publish","es":"Publicar","fr":"Publier","hi":"प्रकाशित करें","id":"Publikasikan","pt-BR":"Publicar","ru":"Опубликовать","ur":"شائع کریں۔","zh-CN":"发布"};

export function project_publish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
