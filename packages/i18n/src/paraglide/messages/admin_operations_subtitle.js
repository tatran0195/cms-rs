import { getLocale } from '../runtime.js';

const translations = {"ar":"حالة التسليم والمزود الحديثة. تُحدث كل 30 ثانية أثناء فتح الصفحة.","bn":"Recent delivery and provider state. Refreshes every 30 seconds while open.","de":"Recent delivery and provider state. Refreshes every 30 seconds while open.","en":"Recent delivery and provider state. Refreshes every 30 seconds while open.","es":"Recent delivery and provider state. Refreshes every 30 seconds while open.","fr":"Recent delivery and provider state. Refreshes every 30 seconds while open.","hi":"Recent delivery and provider state. Refreshes every 30 seconds while open.","id":"Recent delivery and provider state. Refreshes every 30 seconds while open.","pt-BR":"Recent delivery and provider state. Refreshes every 30 seconds while open.","ru":"Recent delivery and provider state. Refreshes every 30 seconds while open.","ur":"Recent delivery and provider state. Refreshes every 30 seconds while open.","zh-CN":"Recent delivery and provider state. Refreshes every 30 seconds while open."};

export function admin_operations_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
