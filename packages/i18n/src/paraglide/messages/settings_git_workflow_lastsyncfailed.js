import { getLocale } from '../runtime.js';

const translations = {"ar":"فشلت آخر مزامنة","bn":"শেষ সিঙ্ক ব্যর্থ হয়েছে৷","de":"Die letzte Synchronisierung ist fehlgeschlagen","en":"Last sync failed","es":"La última sincronización falló","fr":"La dernière synchronisation a échoué","hi":"अंतिम सिंक विफल रहा","id":"Sinkronisasi terakhir gagal","pt-BR":"Falha na última sincronização","ru":"Последняя синхронизация не удалась","ur":"آخری مطابقت پذیری ناکام ہوگئی","zh-CN":"上次同步失败"};

export function settings_git_workflow_lastsyncfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
