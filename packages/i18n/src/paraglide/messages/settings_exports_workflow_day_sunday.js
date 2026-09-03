import { getLocale } from '../runtime.js';

const translations = {"ar":"الأحد","bn":"রবিবার","de":"Sonntag","en":"Sunday","es":"domingo","fr":"dimanche","hi":"रविवार","id":"Minggu","pt-BR":"Domingo","ru":"воскресенье","ur":"اتوار","zh-CN":"周日"};

export function settings_exports_workflow_day_sunday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
