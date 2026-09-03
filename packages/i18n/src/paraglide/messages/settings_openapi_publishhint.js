import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر الموقع لإظهار هذه المراجعة","bn":"এই রিভিশনটি লাইভ করতে সাইটটি প্রকাশ করুন","de":"Veröffentlichen Sie die Website, um diese Überarbeitung live zu schalten","en":"Publish the site to make this revision live","es":"Publica el sitio para publicar esta revisión.","fr":"Publiez le site pour faire vivre cette révision","hi":"इस संशोधन को लाइव बनाने के लिए साइट प्रकाशित करें","id":"Publikasikan situs agar revisi ini dapat diterapkan","pt-BR":"Publique o site para ativar esta revisão","ru":"Опубликуйте сайт, чтобы опубликовать эту версию","ur":"اس نظرثانی کو لائیو بنانے کے لیے سائٹ کو شائع کریں۔","zh-CN":"发布网站以使此修订生效"};

export function settings_openapi_publishhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
