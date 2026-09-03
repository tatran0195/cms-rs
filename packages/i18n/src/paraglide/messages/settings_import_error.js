import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل الاستيراد","bn":"আমদানি ব্যর্থ হয়েছে৷","de":"Der Import ist fehlgeschlagen","en":"Import failed","es":"Importación fallida","fr":"Échec de l'importation","hi":"आयात विफल","id":"Impor gagal","pt-BR":"Falha na importação","ru":"Импорт не удался","ur":"درآمد ناکام ہو گیا۔","zh-CN":"导入失败"};

export function settings_import_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
