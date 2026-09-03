import { getLocale } from '../runtime.js';

const translations = {"ar":"العمليات الأخيرة","bn":"সাম্প্রতিক অপারেশন","de":"Letzte Operationen","en":"Recent operations","es":"Operaciones recientes","fr":"Opérations récentes","hi":"हाल के ऑपरेशन","id":"Operasi terkini","pt-BR":"Operações recentes","ru":"Недавние операции","ur":"حالیہ آپریشنز","zh-CN":"最近的操作"};

export function settings_git_workflow_recentoperations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
