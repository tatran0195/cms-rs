import { getLocale } from '../runtime.js';

const translations = {"ar":"الحالة والنشاط","bn":"অবস্থা এবং কার্যকলাপ","de":"Status und Aktivität","en":"Status and activity","es":"Estado y actividad","fr":"Statut et activité","hi":"स्थिति एवं गतिविधि","id":"Status dan aktivitas","pt-BR":"Status e atividade","ru":"Статус и деятельность","ur":"حیثیت اور سرگرمی","zh-CN":"状态和活动"};

export function settings_git_workflow_nav_overview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
