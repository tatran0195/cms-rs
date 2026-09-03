import { getLocale } from '../runtime.js';

const translations = {"ar":"أحدث إصدار v{version}","bn":"সর্বশেষ v{version}","de":"Neueste v{version}","en":"Latest v{version}","es":"Última v{version}","fr":"Dernière v{version}","hi":"नवीनतम v{version}","id":"v{version} terbaru","pt-BR":"Última v{version}","ru":"Последний v{version}","ur":"تازہ ترین v{version}","zh-CN":"最新 v{version}"};

export function settings_usage_latestversion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
