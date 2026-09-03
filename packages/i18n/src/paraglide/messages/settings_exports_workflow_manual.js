import { getLocale } from '../runtime.js';

const translations = {"ar":"يدوي","bn":"ম্যানুয়াল","de":"Handbuch","en":"Manual","es":"manuales","fr":"Manuel","hi":"मैनुअल","id":"petunjuk","pt-BR":"Manuais","ru":"Руководство","ur":"دستی","zh-CN":"手册"};

export function settings_exports_workflow_manual(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
