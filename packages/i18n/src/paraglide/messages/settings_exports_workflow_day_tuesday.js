import { getLocale } from '../runtime.js';

const translations = {"ar":"الثلاثاء","bn":"মঙ্গলবার","de":"Dienstag","en":"Tuesday","es":"martes","fr":"mardi","hi":"मंगलवार","id":"Selasa","pt-BR":"Terça-feira","ru":"вторник","ur":"منگل","zh-CN":"星期二"};

export function settings_exports_workflow_day_tuesday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
