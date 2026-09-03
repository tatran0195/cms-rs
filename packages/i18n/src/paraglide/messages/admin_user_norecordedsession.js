import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد جلسات مسجلة","bn":"No Recorded Session","de":"No Recorded Session","en":"No Recorded Session","es":"No Recorded Session","fr":"No Recorded Session","hi":"No Recorded Session","id":"No Recorded Session","pt-BR":"No Recorded Session","ru":"No Recorded Session","ur":"No Recorded Session","zh-CN":"No Recorded Session"};

export function admin_user_norecordedsession(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
