import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حذف مساحة العمل","bn":"ওয়ার্কস্পেস মুছে ফেলা যায়নি","de":"Der Arbeitsbereich konnte nicht gelöscht werden","en":"Could not delete the workspace","es":"No se pudo eliminar el espacio de trabajo","fr":"Impossible de supprimer l'espace de travail","hi":"कार्यस्थान हटाया नहीं जा सका","id":"Tidak dapat menghapus ruang kerja","pt-BR":"Não foi possível excluir o espaço de trabalho","ru":"Не удалось удалить рабочую область.","ur":"ورک اسپیس کو حذف نہیں کیا جا سکا","zh-CN":"无法删除工作区"};

export function settings_workspace_toast_deleteerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
