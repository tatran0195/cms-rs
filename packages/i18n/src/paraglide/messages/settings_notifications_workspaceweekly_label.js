import { getLocale } from '../runtime.js';

const translations = {"ar":"الملخّص الأسبوعي","bn":"সাপ্তাহিক সারাংশ","de":"Wöchentliche Zusammenfassung","en":"Weekly summary","es":"Resumen semanal","fr":"Résumé hebdomadaire","hi":"साप्ताहिक सारांश","id":"Ringkasan mingguan","pt-BR":"Resumo semanal","ru":"Еженедельный обзор","ur":"ہفتہ وار خلاصہ","zh-CN":"每周总结"};

export function settings_notifications_workspaceweekly_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
