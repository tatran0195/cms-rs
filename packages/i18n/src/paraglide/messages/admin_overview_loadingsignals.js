import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ تحميل المؤشرات التشغيلية…","bn":"Loading operational signals…","de":"Loading operational signals…","en":"Loading operational signals…","es":"Loading operational signals…","fr":"Loading operational signals…","hi":"Loading operational signals…","id":"Loading operational signals…","pt-BR":"Loading operational signals…","ru":"Loading operational signals…","ur":"Loading operational signals…","zh-CN":"Loading operational signals…"};

export function admin_overview_loadingsignals(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
