import { getLocale } from '../runtime.js';

const translations = {"ar":"المواقع","bn":"প্রকল্প","de":"Projekte","en":"Projects","es":"Proyectos","fr":"Projets","hi":"परियोजनाएं","id":"Proyek","pt-BR":"Projetos","ru":"Проекты","ur":"پروجیکٹس","zh-CN":"项目"};

export function dashboard_stats_projects(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
