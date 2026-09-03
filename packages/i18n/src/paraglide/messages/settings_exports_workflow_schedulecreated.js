import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إنشاء جدول الأرشفة.","bn":"সংরক্ষণাগার সময়সূচী তৈরি করা হয়েছে.","de":"Archivierungsplan erstellt.","en":"Archive schedule created.","es":"Calendario de archivo creado.","fr":"Calendrier d'archivage créé.","hi":"पुरालेख कार्यक्रम बनाया गया.","id":"Jadwal arsip dibuat.","pt-BR":"Cronograma de arquivo criado.","ru":"Расписание архива создано.","ur":"آرکائیو کا شیڈول بنایا گیا۔","zh-CN":"存档计划已创建。"};

export function settings_exports_workflow_schedulecreated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
