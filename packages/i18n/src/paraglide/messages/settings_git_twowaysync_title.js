import { getLocale } from '../runtime.js';

const translations = {"ar":"المزامنة التلقائية","bn":"স্বয়ংক্রিয় সিঙ্ক","de":"Automatische Synchronisierung","en":"Automatic sync","es":"Sincronización automática","fr":"Synchronisation automatique","hi":"स्वचालित समन्वयन","id":"Sinkronisasi otomatis","pt-BR":"Sincronização automática","ru":"Автоматическая синхронизация","ur":"خودکار مطابقت پذیری۔","zh-CN":"自动同步"};

export function settings_git_twowaysync_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
