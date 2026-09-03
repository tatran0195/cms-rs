import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء جدول","bn":"সময়সূচী তৈরি করুন","de":"Zeitplan erstellen","en":"Create schedule","es":"Crear horario","fr":"Créer un planning","hi":"शेड्यूल बनाएं","id":"Buat jadwal","pt-BR":"Criar cronograma","ru":"Создать расписание","ur":"شیڈول بنائیں","zh-CN":"创建日程"};

export function settings_exports_workflow_createschedule(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
