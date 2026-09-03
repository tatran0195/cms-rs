import { getLocale } from '../runtime.js';

const translations = {"ar":"بعض القياسات غير متاحة","bn":"Some measurements are unavailable","de":"Some measurements are unavailable","en":"Some measurements are unavailable","es":"Some measurements are unavailable","fr":"Some measurements are unavailable","hi":"Some measurements are unavailable","id":"Some measurements are unavailable","pt-BR":"Some measurements are unavailable","ru":"Some measurements are unavailable","ur":"Some measurements are unavailable","zh-CN":"Some measurements are unavailable"};

export function settings_usage_availability_partial(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
