import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد إصدارات بعد.","bn":"এখনও কোন রিলিজ.","de":"Noch keine Veröffentlichungen.","en":"No releases yet.","es":"Aún no hay lanzamientos.","fr":"Aucune version pour le moment.","hi":"अभी तक कोई रिलीज़ नहीं.","id":"Belum ada rilis.","pt-BR":"Ainda não há lançamentos.","ru":"Релизов пока нет.","ur":"ابھی تک کوئی ریلیز نہیں ہوئی۔","zh-CN":"暂无发布记录。"};

export function site_changelogempty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
