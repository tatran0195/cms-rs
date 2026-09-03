import { getLocale } from '../runtime.js';

const translations = {"ar":"قوائم التوزيع محدودة بأول 100 قيمة.","bn":"Distribution lists are bounded to the first 100 values.","de":"Distribution lists are bounded to the first 100 values.","en":"Distribution lists are bounded to the first 100 values.","es":"Distribution lists are bounded to the first 100 values.","fr":"Distribution lists are bounded to the first 100 values.","hi":"Distribution lists are bounded to the first 100 values.","id":"Distribution lists are bounded to the first 100 values.","pt-BR":"Distribution lists are bounded to the first 100 values.","ru":"Distribution lists are bounded to the first 100 values.","ur":"Distribution lists are bounded to the first 100 values.","zh-CN":"Distribution lists are bounded to the first 100 values."};

export function settings_search_diagnostics_distributionbounded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
