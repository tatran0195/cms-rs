import { getLocale } from '../runtime.js';

const translations = {"ar":"إشعارات الإنتاج","bn":"প্রোডাকশন নোটিফিকেশন","de":"Produktionsbenachrichtigungen","en":"Production notifications","es":"Notificaciones de producción","fr":"Notifications de production","hi":"उत्पादन सूचना","id":"Pemberitahuan Produksi","pt-BR":"Notificações sobre a produção","ru":"Уведомления о производстве","ur":"پروڈکشن نوٹیفکیشنز","zh-CN":"生产通知"};

export function settings_integrations_labelplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
