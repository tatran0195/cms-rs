import { getLocale } from '../runtime.js';

const translations = {"ar":"سجل التدقيق","bn":"অডিট লগ","de":"Audit-Protokoll","en":"Audit log","es":"Registro de auditoría","fr":"Journal d'audit","hi":"ऑडिट लॉग","id":"Catatan audit","pt-BR":"Registro de auditoria","ru":"Журнал аудита","ur":"آڈٹ لاگ","zh-CN":"审核日志"};

export function settings_plan_tier_team_feature_audit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
