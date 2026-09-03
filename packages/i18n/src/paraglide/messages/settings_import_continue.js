import { getLocale } from '../runtime.js';

const translations = {"ar":"مراجعة الاستيراد","bn":"আমদানি পর্যালোচনা করুন","de":"Überprüfen Sie den Import","en":"Review import","es":"Importación de reseñas","fr":"Examiner l'importation","hi":"आयात की समीक्षा करें","id":"Tinjau impor","pt-BR":"Revisar importação","ru":"Обзор импорта","ur":"درآمد کا جائزہ لیں۔","zh-CN":"审核导入"};

export function settings_import_continue(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
