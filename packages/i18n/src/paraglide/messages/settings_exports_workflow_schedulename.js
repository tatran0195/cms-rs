import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم الجدول","bn":"সময়সূচীর নাম","de":"Zeitplanname","en":"Schedule name","es":"Nombre del horario","fr":"Nom du programme","hi":"अनुसूची का नाम","id":"Nama jadwal","pt-BR":"Nome do agendamento","ru":"Название расписания","ur":"شیڈول کا نام","zh-CN":"日程名称"};

export function settings_exports_workflow_schedulename(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
