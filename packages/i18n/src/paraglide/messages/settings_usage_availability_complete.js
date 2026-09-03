import { getLocale } from '../runtime.js';

const translations = {"ar":"كل القياسات متاحة","bn":"All measurements are available","de":"All measurements are available","en":"All measurements are available","es":"All measurements are available","fr":"All measurements are available","hi":"All measurements are available","id":"All measurements are available","pt-BR":"All measurements are available","ru":"All measurements are available","ur":"All measurements are available","zh-CN":"All measurements are available"};

export function settings_usage_availability_complete(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
