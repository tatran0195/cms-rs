import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات التصدير الفاشلة","bn":"Export failures","de":"Export failures","en":"Export failures","es":"Export failures","fr":"Export failures","hi":"Export failures","id":"Export failures","pt-BR":"Export failures","ru":"Export failures","ur":"Export failures","zh-CN":"Export failures"};

export function admin_overview_exportfailures(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
