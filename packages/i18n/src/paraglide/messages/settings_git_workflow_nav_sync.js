import { getLocale } from '../runtime.js';

const translations = {"ar":"الاستيراد والمزامنة","bn":"আমদানি এবং সিঙ্ক","de":"Importieren und synchronisieren","en":"Import and sync","es":"Importar y sincronizar","fr":"Importer et synchroniser","hi":"आयात करें और सिंक करें","id":"Impor dan sinkronisasi","pt-BR":"Importar e sincronizar","ru":"Импорт и синхронизация","ur":"درآمد اور مطابقت پذیری","zh-CN":"导入和同步"};

export function settings_git_workflow_nav_sync(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
