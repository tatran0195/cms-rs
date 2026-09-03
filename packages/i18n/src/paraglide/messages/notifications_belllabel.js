import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح الإشعارات","bn":"বিজ্ঞপ্তি খুলুন","de":"Benachrichtigungen öffnen","en":"Open notifications","es":"Notificaciones abiertas","fr":"Ouvrir les notifications","hi":"सूचनाएं खोलें","id":"Buka notifikasi","pt-BR":"Abrir notificações","ru":"Открытые уведомления","ur":"اطلاعات کھولیں۔","zh-CN":"打开通知"};

export function notifications_belllabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
