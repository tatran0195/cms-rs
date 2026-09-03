import { getLocale } from '../runtime.js';

const translations = {"ar":"الخطة والفوترة","bn":"পরিকল্পনা এবং বিলিং","de":"Planen und abrechnen","en":"Plan & billing","es":"Planificación y facturación","fr":"Forfait et facturation","hi":"योजना एवं बिलिंग","id":"Rencana & penagihan","pt-BR":"Plano e faturamento","ru":"План и выставление счетов","ur":"منصوبہ اور بلنگ","zh-CN":"计划和计费"};

export function settings_notifications_workspaceplan_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
