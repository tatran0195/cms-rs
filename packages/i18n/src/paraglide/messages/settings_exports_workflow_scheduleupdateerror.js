import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحديث الجدول.","bn":"সময়সূচী আপডেট করা যায়নি.","de":"Der Zeitplan konnte nicht aktualisiert werden.","en":"Could not update the schedule.","es":"No se pudo actualizar el horario.","fr":"Impossible de mettre à jour le planning.","hi":"शेड्यूल अपडेट नहीं किया जा सका.","id":"Tidak dapat memperbarui jadwal.","pt-BR":"Não foi possível atualizar a programação.","ru":"Не удалось обновить расписание.","ur":"شیڈول کو اپ ڈیٹ نہیں کیا جا سکا۔","zh-CN":"无法更新时间表。"};

export function settings_exports_workflow_scheduleupdateerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
