import { getLocale } from '../runtime.js';

const translations = {"ar":"الأربعاء","bn":"বুধবার","de":"Mittwoch","en":"Wednesday","es":"miércoles","fr":"mercredi","hi":"बुधवार","id":"Rabu","pt-BR":"Quarta-feira","ru":"среда","ur":"بدھ","zh-CN":"星期三"};

export function settings_exports_workflow_day_wednesday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
