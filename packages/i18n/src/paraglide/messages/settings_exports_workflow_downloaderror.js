import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تنزيل التصدير.","bn":"রপ্তানি ডাউনলোড করা যায়নি.","de":"Der Export konnte nicht heruntergeladen werden.","en":"Could not download the export.","es":"No se pudo descargar la exportación.","fr":"Impossible de télécharger l'exportation.","hi":"निर्यात डाउनलोड नहीं किया जा सका.","id":"Tidak dapat mengunduh ekspor.","pt-BR":"Não foi possível baixar a exportação.","ru":"Не удалось загрузить экспорт.","ur":"برآمد کو ڈاؤن لوڈ نہیں کیا جا سکا۔","zh-CN":"无法下载导出。"};

export function settings_exports_workflow_downloaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
