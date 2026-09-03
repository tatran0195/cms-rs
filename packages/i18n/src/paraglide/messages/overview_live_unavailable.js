import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يتم النشر بعد","bn":"এখনো প্রকাশিত হয়নি","de":"Noch nicht veröffentlicht","en":"Not published yet","es":"Aún no publicado","fr":"Pas encore publié","hi":"अभी तक प्रकाशित नहीं हुआ","id":"Belum dipublikasikan","pt-BR":"Ainda não publicado","ru":"Еще не опубликовано","ur":"ابھی شائع نہیں ہوا۔","zh-CN":"尚未发布"};

export function overview_live_unavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
