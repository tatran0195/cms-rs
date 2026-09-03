import { getLocale } from '../runtime.js';

const translations = {"ar":"بدأ النشر.","bn":"প্রকাশ করা শুরু হল।","de":"Veröffentlichung gestartet.","en":"Publish started.","es":"Se inició la publicación.","fr":"Publication commencée.","hi":"प्रकाशन प्रारंभ हुआ.","id":"Publikasi dimulai.","pt-BR":"Publicação iniciada.","ru":"Публикация началась.","ur":"اشاعت شروع ہو گئی۔","zh-CN":"发布开始。"};

export function overview_publishfailed_queued(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
