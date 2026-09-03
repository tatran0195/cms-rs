import { getLocale } from '../runtime.js';

const translations = {"ar":"تجاهل التغييرات غير المحفوظة؟","bn":"অসংরক্ষিত পরিবর্তনগুলি বাতিল করবেন?","de":"Nicht gespeicherte Änderungen verwerfen?","en":"Discard unsaved changes?","es":"¿Descartar los cambios no guardados?","fr":"Supprimer les modifications non enregistrées ?","hi":"सहेजे न गए परिवर्तन त्यागें?","id":"Buang perubahan yang belum disimpan?","pt-BR":"Descartar alterações não salvas?","ru":"Отменить несохраненные изменения?","ur":"غیر محفوظ شدہ تبدیلیاں رد کریں؟","zh-CN":"放弃未保存的更改？"};

export function settings_chrome_scope_discardtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
