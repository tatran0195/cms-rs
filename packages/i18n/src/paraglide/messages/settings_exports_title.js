import { getLocale } from '../runtime.js';

const translations = {"ar":"التصدير","bn":"রপ্তানি","de":"Exporte","en":"Exports","es":"Exportaciones","fr":"Exportations","hi":"निर्यात","id":"Ekspor","pt-BR":"Exportações","ru":"Экспорт","ur":"برآمدات","zh-CN":"出口"};

export function settings_exports_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
