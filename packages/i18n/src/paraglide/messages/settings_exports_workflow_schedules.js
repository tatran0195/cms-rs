import { getLocale } from '../runtime.js';

const translations = {"ar":"الجداول الزمنية","bn":"সময়সূচী","de":"Zeitpläne","en":"Schedules","es":"Horarios","fr":"Horaires","hi":"अनुसूचियाँ","id":"Jadwal","pt-BR":"Horários","ru":"Расписания","ur":"شیڈولز","zh-CN":"时间表"};

export function settings_exports_workflow_schedules(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
