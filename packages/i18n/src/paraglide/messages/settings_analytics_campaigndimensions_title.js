import { getLocale } from '../runtime.js';

const translations = {"ar":"أبعاد الحملات","bn":"Campaign dimensions","de":"Campaign dimensions","en":"Campaign dimensions","es":"Campaign dimensions","fr":"Campaign dimensions","hi":"Campaign dimensions","id":"Campaign dimensions","pt-BR":"Campaign dimensions","ru":"Campaign dimensions","ur":"Campaign dimensions","zh-CN":"Campaign dimensions"};

export function settings_analytics_campaigndimensions_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
