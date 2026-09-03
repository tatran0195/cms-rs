import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مواقع بعد","bn":"এখনও কোন প্রকল্প","de":"Noch keine Projekte","en":"No projects yet","es":"Aún no hay proyectos","fr":"Aucun projet pour l'instant","hi":"अभी तक कोई प्रोजेक्ट नहीं","id":"Belum ada proyek","pt-BR":"Ainda não há projetos","ru":"Пока нет проектов","ur":"ابھی تک کوئی پروجیکٹ نہیں ہے۔","zh-CN":"还没有项目"};

export function dashboard_empty_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
