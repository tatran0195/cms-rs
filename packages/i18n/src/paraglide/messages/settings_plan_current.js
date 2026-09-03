import { getLocale } from '../runtime.js';

const translations = {"ar":"الحالية","bn":"কারেন্ট","de":"Aktuell","en":"Current","es":"Actual","fr":"Actuel","hi":"वर्तमान","id":"Saat ini","pt-BR":"Atual","ru":"Текущий","ur":"کرنٹ","zh-CN":"当前"};

export function settings_plan_current(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
