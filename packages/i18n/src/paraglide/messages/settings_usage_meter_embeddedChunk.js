import { getLocale } from '../runtime.js';

const translations = {"ar":"المقاطع المضمّنة","bn":"Embedded chunks","de":"Embedded chunks","en":"Embedded chunks","es":"Embedded chunks","fr":"Embedded chunks","hi":"Embedded chunks","id":"Embedded chunks","pt-BR":"Embedded chunks","ru":"Embedded chunks","ur":"Embedded chunks","zh-CN":"Embedded chunks"};

export function settings_usage_meter_embeddedChunk(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
