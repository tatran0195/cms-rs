import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات البناء وزيارات الوثائق العامة في فترة الفوترة الحالية بتوقيت UTC.","bn":"Builds and public documentation traffic in this UTC billing period.","de":"Builds and public documentation traffic in this UTC billing period.","en":"Builds and public documentation traffic in this UTC billing period.","es":"Builds and public documentation traffic in this UTC billing period.","fr":"Builds and public documentation traffic in this UTC billing period.","hi":"Builds and public documentation traffic in this UTC billing period.","id":"Builds and public documentation traffic in this UTC billing period.","pt-BR":"Builds and public documentation traffic in this UTC billing period.","ru":"Builds and public documentation traffic in this UTC billing period.","ur":"Builds and public documentation traffic in this UTC billing period.","zh-CN":"Builds and public documentation traffic in this UTC billing period."};

export function settings_usage_group_delivery_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
