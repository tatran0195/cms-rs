import { getLocale } from '../runtime.js';

const translations = {"ar":"أيام الاحتفاظ","bn":"ধরে রাখার দিন","de":"Aufbewahrungstage","en":"Retention days","es":"Días de retención","fr":"Jours de rétention","hi":"अवधारण दिन","id":"Hari retensi","pt-BR":"Dias de retenção","ru":"Дни хранения","ur":"برقرار رکھنے کے دن","zh-CN":"保留天数"};

export function settings_exports_workflow_retentiondays(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
