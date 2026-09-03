import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تشغيل الجدول.","bn":"সিডিউল চালাতে পারেনি।","de":"Der Zeitplan konnte nicht ausgeführt werden.","en":"Could not run the schedule.","es":"No se pudo ejecutar el cronograma.","fr":"Impossible d'exécuter le planning.","hi":"शेड्यूल नहीं चलाया जा सका.","id":"Tidak dapat menjalankan jadwal.","pt-BR":"Não foi possível executar o agendamento.","ru":"Не удалось запустить расписание.","ur":"شیڈول نہیں چل سکا۔","zh-CN":"无法运行计划。"};

export function settings_exports_workflow_schedulerunerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
