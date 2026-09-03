import { getLocale } from '../runtime.js';

const translations = {"ar":"كل المشاريع","bn":"সমস্ত প্রকল্প","de":"Alle Projekte","en":"All projects","es":"Todos los proyectos","fr":"Tous les projets","hi":"सभी परियोजनाएँ","id":"Semua proyek","pt-BR":"Todos os projetos","ru":"Все проекты","ur":"تمام منصوبے","zh-CN":"所有项目"};

export function command_allprojects(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
