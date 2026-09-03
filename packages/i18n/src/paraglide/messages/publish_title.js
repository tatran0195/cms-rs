import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر إلى الإنتاج","bn":"উৎপাদনে প্রকাশ করুন","de":"In der Produktion veröffentlichen","en":"Publish to production","es":"Publicar en producción","fr":"Publier en production","hi":"उत्पादन के लिए प्रकाशित करें","id":"Publikasikan ke produksi","pt-BR":"Publicar para produção","ru":"Публикация в производство","ur":"پروڈکشن میں شائع کریں۔","zh-CN":"发布到生产环境"};

export function publish_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
