import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إنشاء الجدول.","bn":"সময়সূচী তৈরি করা যায়নি।","de":"Der Zeitplan konnte nicht erstellt werden.","en":"Could not create the schedule.","es":"No se pudo crear el horario.","fr":"Impossible de créer le planning.","hi":"शेड्यूल नहीं बनाया जा सका.","id":"Tidak dapat membuat jadwal.","pt-BR":"Não foi possível criar o agendamento.","ru":"Не удалось создать расписание.","ur":"شیڈول نہیں بنایا جا سکا۔","zh-CN":"无法创建时间表。"};

export function settings_exports_workflow_schedulecreateerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
