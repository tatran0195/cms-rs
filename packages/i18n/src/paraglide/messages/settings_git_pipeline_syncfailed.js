import { getLocale } from '../runtime.js';

const translations = {"ar":"فشلت مزامنة الدفع {when}","bn":"পুশ সিঙ্ক ব্যর্থ হয়েছে {when}","de":"Push-Synchronisierung fehlgeschlagen {when}","en":"Push sync failed {when}","es":"Error en la sincronización push {when}","fr":"Échec de la synchronisation push {when}","hi":"पुश सिंक विफल {when}","id":"Sinkronisasi push gagal {when}","pt-BR":"Falha na sincronização push {when}","ru":"Не удалось выполнить push-синхронизацию {when}","ur":"پش مطابقت پذیری ناکام ہوگئی {when}","zh-CN":"推送同步失败 {when}"};

export function settings_git_pipeline_syncfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
