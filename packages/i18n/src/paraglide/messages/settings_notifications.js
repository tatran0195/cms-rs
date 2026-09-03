import { getLocale } from '../runtime.js';

const translations = {"ar":"الإشعارات","bn":"বিজ্ঞপ্তি","de":"Benachrichtigungen","en":"Notifications","es":"Notificaciones","fr":"Notifications","hi":"सूचनाएं","id":"Pemberitahuan","pt-BR":"Notificações","ru":"Уведомления","ur":"اطلاعات","zh-CN":"通知"};

export function settings_notifications(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
