import { getLocale } from '../runtime.js';

const translations = {"ar":"الخميس","bn":"বৃহস্পতিবার","de":"Donnerstag","en":"Thursday","es":"jueves","fr":"jeudi","hi":"गुरुवार","id":"Kamis","pt-BR":"Quinta-feira","ru":"Четверг","ur":"جمعرات","zh-CN":"星期四"};

export function settings_exports_workflow_day_thursday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
