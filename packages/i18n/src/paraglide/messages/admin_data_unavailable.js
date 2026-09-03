import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تحميل البيانات","bn":"Unable to load data","de":"Unable to load data","en":"Unable to load data","es":"Unable to load data","fr":"Unable to load data","hi":"Unable to load data","id":"Unable to load data","pt-BR":"Unable to load data","ru":"Unable to load data","ur":"Unable to load data","zh-CN":"Unable to load data"};

export function admin_data_unavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
