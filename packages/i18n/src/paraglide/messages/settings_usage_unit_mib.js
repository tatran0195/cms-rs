import { getLocale } from '../runtime.js';

const translations = {"ar":"ميبيبايت","bn":"MiB","de":"MiB","en":"MiB","es":"MiB","fr":"MiB","hi":"MiB","id":"MiB","pt-BR":"MiB","ru":"MiB","ur":"MiB","zh-CN":"MiB"};

export function settings_usage_unit_mib(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
