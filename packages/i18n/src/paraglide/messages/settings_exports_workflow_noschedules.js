import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد جداول أرشفة","bn":"কোন সংরক্ষণাগার সময়সূচী","de":"Keine Archivierungspläne","en":"No archival schedules","es":"Sin horarios de archivo","fr":"Pas de planning d'archivage","hi":"कोई अभिलेखीय कार्यक्रम नहीं","id":"Tidak ada jadwal arsip","pt-BR":"Sem programações de arquivamento","ru":"Нет архивных расписаний","ur":"کوئی آرکائیو شیڈول نہیں ہے۔","zh-CN":"没有档案时间表"};

export function settings_exports_workflow_noschedules(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
