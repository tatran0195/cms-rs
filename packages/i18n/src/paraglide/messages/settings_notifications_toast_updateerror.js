import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحديث الإشعارات","bn":"বিজ্ঞপ্তি আপডেট করা যায়নি","de":"Benachrichtigungen konnten nicht aktualisiert werden","en":"Could not update notifications","es":"No se pudieron actualizar las notificaciones","fr":"Impossible de mettre à jour les notifications","hi":"सूचनाएं अपडेट नहीं की जा सकीं","id":"Tidak dapat memperbarui notifikasi","pt-BR":"Não foi possível atualizar as notificações","ru":"Не удалось обновить уведомления.","ur":"اطلاعات کو اپ ڈیٹ نہیں کیا جا سکا","zh-CN":"无法更新通知"};

export function settings_notifications_toast_updateerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
