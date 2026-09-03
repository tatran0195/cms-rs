import { getLocale } from '../runtime.js';

const translations = {"ar":"الخطة","bn":"পরিকল্পনা","de":"Planen","en":"Plan","es":"Planificar","fr":"Planifier","hi":"योजना","id":"Rencana","pt-BR":"Plano","ru":"План","ur":"منصوبہ","zh-CN":"计划"};

export function settings_plan(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
