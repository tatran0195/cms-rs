import { getLocale } from '../runtime.js';

const translations = {"ar":"سجل التشغيل","bn":"ইতিহাস চালান","de":"Laufverlauf","en":"Run history","es":"Historial de ejecución","fr":"Historique d'exécution","hi":"इतिहास चलाएँ","id":"Jalankan sejarah","pt-BR":"Histórico de execução","ru":"История запуска","ur":"تاریخ چلائیں۔","zh-CN":"运行历史"};

export function settings_exports_workflow_history(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
