import { getLocale } from '../runtime.js';

const translations = {"ar":"موقع جديد","bn":"নতুন প্রকল্প","de":"Neues Projekt","en":"New project","es":"Nuevo proyecto","fr":"Nouveau projet","hi":"नया प्रोजेक्ट","id":"Proyek baru","pt-BR":"Novo projeto","ru":"Новый проект","ur":"نیا پروجیکٹ","zh-CN":"新项目"};

export function dashboard_newproject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
