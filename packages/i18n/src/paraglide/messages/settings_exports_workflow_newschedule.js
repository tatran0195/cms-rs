import { getLocale } from '../runtime.js';

const translations = {"ar":"جدول جديد","bn":"নতুন সময়সূচী","de":"Neuer Zeitplan","en":"New schedule","es":"Nuevo horario","fr":"Nouvel horaire","hi":"नया शेड्यूल","id":"Jadwal baru","pt-BR":"Nova programação","ru":"Новое расписание","ur":"نیا شیڈول","zh-CN":"新时间表"};

export function settings_exports_workflow_newschedule(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
