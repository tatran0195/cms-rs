import { getLocale } from '../runtime.js';

const translations = {"ar":"السبت","bn":"শনিবার","de":"Samstag","en":"Saturday","es":"sábado","fr":"samedi","hi":"शनिवार","id":"Sabtu","pt-BR":"Sábado","ru":"Суббота","ur":"ہفتہ","zh-CN":"星期六"};

export function settings_exports_workflow_day_saturday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
