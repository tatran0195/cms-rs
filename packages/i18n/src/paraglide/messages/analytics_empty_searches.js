import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد عمليات بحث بعد.","bn":"এখনও কোন অনুসন্ধান.","de":"Noch keine Suchanfragen.","en":"No searches yet.","es":"Aún no hay búsquedas.","fr":"Aucune recherche pour l'instant.","hi":"अभी तक कोई खोज नहीं.","id":"Belum ada pencarian.","pt-BR":"Nenhuma pesquisa ainda.","ru":"Поисков пока нет.","ur":"ابھی تک کوئی تلاش نہیں ہے۔","zh-CN":"还没有搜索。"};

export function analytics_empty_searches(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
