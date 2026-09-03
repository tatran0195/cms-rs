import { getLocale } from '../runtime.js';

const translations = {"ar":"مجدول","bn":"নির্ধারিত","de":"Geplant","en":"Scheduled","es":"Programado","fr":"Programmé","hi":"अनुसूचित","id":"Dijadwalkan","pt-BR":"Agendado","ru":"Запланировано","ur":"طے شدہ","zh-CN":"预定"};

export function settings_exports_workflow_scheduled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
