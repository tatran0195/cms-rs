import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر مزامنة عبر الدفع {when}","bn":"শেষ পুশ সিঙ্ক {when}","de":"Letzte Push-Synchronisierung {when}","en":"Last push sync {when}","es":"Última sincronización push {when}","fr":"Dernière synchronisation push {when}","hi":"अंतिम पुश सिंक {when}","id":"Sinkronisasi push terakhir {when}","pt-BR":"Última sincronização push {when}","ru":"Последняя синхронизация {when}","ur":"آخری پش سنک {when}","zh-CN":"最后推送同步 {when}"};

export function settings_git_pipeline_lastsync(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
