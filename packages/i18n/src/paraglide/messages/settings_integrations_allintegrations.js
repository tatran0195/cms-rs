import { getLocale } from '../runtime.js';

const translations = {"ar":"جميع التكاملات","bn":"সমস্ত ইন্টিগ্রেশন","de":"Alle Integrationen","en":"All integrations","es":"Todas las integraciones","fr":"Toutes les intégrations","hi":"सभी एकीकरण","id":"Semua integrasinya","pt-BR":"Todas as integrações","ru":"Все интеграции","ur":"تمام انضمامات","zh-CN":"所有整合"};

export function settings_integrations_allintegrations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
