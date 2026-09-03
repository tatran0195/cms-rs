import { getLocale } from '../runtime.js';

const translations = {"ar":"معاينة الاستيراد","bn":"পূর্বরূপ আমদানি","de":"Vorschau des Imports","en":"Preview import","es":"Previsualizar importación","fr":"Aperçu de l'importation","hi":"आयात का पूर्वावलोकन करें","id":"Pratinjau impor","pt-BR":"Pré-visualizar importação","ru":"Предварительный импорт","ur":"پیش نظارہ درآمد","zh-CN":"预览导入"};

export function settings_theme_previewimport(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
