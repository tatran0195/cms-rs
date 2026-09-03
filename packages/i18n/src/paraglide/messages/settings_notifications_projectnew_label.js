import { getLocale } from '../runtime.js';

const translations = {"ar":"المشاريع الجديدة","bn":"নতুন প্রকল্প","de":"Neue Projekte","en":"New projects","es":"Nuevos proyectos","fr":"Nouveaux projets","hi":"नई परियोजनाएँ","id":"Proyek baru","pt-BR":"Novos projetos","ru":"Новые проекты","ur":"نئے منصوبے","zh-CN":"新项目"};

export function settings_notifications_projectnew_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
