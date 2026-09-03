import { getLocale } from '../runtime.js';

const translations = {"ar":"مراجعة النشاط الأمني","bn":"নিরাপত্তা কার্যকলাপ পর্যালোচনা","de":"Überprüfen Sie die Sicherheitsaktivitäten","en":"Review security activity","es":"Revisar la actividad de seguridad","fr":"Examiner l'activité de sécurité","hi":"सुरक्षा गतिविधि की समीक्षा करें","id":"Tinjau aktivitas keamanan","pt-BR":"Revise a atividade de segurança","ru":"Просмотр действий по обеспечению безопасности","ur":"سیکیورٹی سرگرمی کا جائزہ لیں۔","zh-CN":"审查安全活动"};

export function settings_authentication_reader_auditreview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
