import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تحميل هذه البيانات التشغيلية.","bn":"This operational data could not be loaded.","de":"This operational data could not be loaded.","en":"This operational data could not be loaded.","es":"This operational data could not be loaded.","fr":"This operational data could not be loaded.","hi":"This operational data could not be loaded.","id":"This operational data could not be loaded.","pt-BR":"This operational data could not be loaded.","ru":"This operational data could not be loaded.","ur":"This operational data could not be loaded.","zh-CN":"This operational data could not be loaded."};

export function admin_data_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
