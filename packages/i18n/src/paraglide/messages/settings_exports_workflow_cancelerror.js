import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إلغاء التصدير.","bn":"রপ্তানি বাতিল করা যায়নি।","de":"Der Export konnte nicht abgebrochen werden.","en":"Could not cancel the export.","es":"No se pudo cancelar la exportación.","fr":"Impossible d'annuler l'exportation.","hi":"निर्यात रद्द नहीं किया जा सका.","id":"Tidak dapat membatalkan ekspor.","pt-BR":"Não foi possível cancelar a exportação.","ru":"Не удалось отменить экспорт.","ur":"برآمد کو منسوخ نہیں کیا جا سکا۔","zh-CN":"无法取消导出。"};

export function settings_exports_workflow_cancelerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
