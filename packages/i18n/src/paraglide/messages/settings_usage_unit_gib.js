import { getLocale } from '../runtime.js';

const translations = {"ar":"غيبيبايت","bn":"GiB","de":"GiB","en":"GiB","es":"GiB","fr":"GiB","hi":"GiB","id":"GiB","pt-BR":"GiB","ru":"GiB","ur":"GiB","zh-CN":"GiB"};

export function settings_usage_unit_gib(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
