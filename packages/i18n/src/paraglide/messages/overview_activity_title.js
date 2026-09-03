import { getLocale } from '../runtime.js';

const translations = {"ar":"النشاط","bn":"কার্যকলাপ","de":"Aktivität","en":"Activity","es":"Actividad","fr":"Activité","hi":"गतिविधि","id":"Aktivitas","pt-BR":"Atividade","ru":"Деятельность","ur":"سرگرمی","zh-CN":"活动"};

export function overview_activity_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
