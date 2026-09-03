import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتمل الاستيراد","bn":"আমদানি শেষ","de":"Import abgeschlossen","en":"Import finished","es":"Importación finalizada","fr":"Importation terminée","hi":"आयात समाप्त","id":"Impor selesai","pt-BR":"Importação concluída","ru":"Импорт завершен","ur":"درآمد ختم","zh-CN":"导入完成"};

export function settings_import_success(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
