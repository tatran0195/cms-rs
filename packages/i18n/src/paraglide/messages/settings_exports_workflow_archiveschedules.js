import { getLocale } from '../runtime.js';

const translations = {"ar":"جداول الأرشفة","bn":"আর্কাইভ সময়সূচী","de":"Archivpläne","en":"Archive schedules","es":"Horarios de archivo","fr":"Archiver les plannings","hi":"पुरालेख कार्यक्रम","id":"Jadwal arsip","pt-BR":"Arquivar programações","ru":"Архив расписаний","ur":"آرکائیو کے نظام الاوقات","zh-CN":"存档时间表"};

export function settings_exports_workflow_archiveschedules(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
