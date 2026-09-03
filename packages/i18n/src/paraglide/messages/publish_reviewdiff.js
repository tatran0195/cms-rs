import { getLocale } from '../runtime.js';

const translations = {"ar":"مراجعة الفرق","bn":"পার্থক্য পর্যালোচনা করুন","de":"Bewertungsunterschied","en":"Review diff","es":"Revisar diferencia","fr":"Examiner les différences","hi":"समीक्षा भिन्न","id":"Tinjauan berbeda","pt-BR":"Rever diferença","ru":"Обзор различий","ur":"فرق کا جائزہ لیں۔","zh-CN":"查看差异"};

export function publish_reviewdiff(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
