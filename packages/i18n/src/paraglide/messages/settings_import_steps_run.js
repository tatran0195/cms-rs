import { getLocale } from '../runtime.js';

const translations = {"ar":"الاستيراد","bn":"আমদানি","de":"Importieren","en":"Import","es":"Importar","fr":"Importer","hi":"आयात करें","id":"Impor","pt-BR":"Importar","ru":"Импорт","ur":"درآمد کریں۔","zh-CN":"进口"};

export function settings_import_steps_run(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
