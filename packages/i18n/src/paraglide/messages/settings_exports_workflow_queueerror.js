import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر وضع التصدير في قائمة الانتظار.","bn":"রপ্তানির সারিতে রাখা যায়নি।","de":"Der Export konnte nicht in die Warteschlange gestellt werden.","en":"Could not queue the export.","es":"No se pudo poner en cola la exportación.","fr":"Impossible de mettre l'exportation en file d'attente.","hi":"निर्यात को कतारबद्ध नहीं किया जा सका.","id":"Tidak dapat mengantri ekspor.","pt-BR":"Não foi possível colocar a exportação na fila.","ru":"Не удалось поставить экспорт в очередь.","ur":"برآمد کو قطار میں نہیں لگایا جا سکا۔","zh-CN":"无法对导出进行排队。"};

export function settings_exports_workflow_queueerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
