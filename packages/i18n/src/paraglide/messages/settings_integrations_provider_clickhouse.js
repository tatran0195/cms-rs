import { getLocale } from '../runtime.js';

const translations = {"ar":"ClickHouse","bn":"ClickHouse","de":"ClickHouse","en":"ClickHouse","es":"ClickHouse","fr":"ClickHouse","hi":"ClickHouse","id":"ClickHouse","pt-BR":"ClickHouse","ru":"ClickHouse","ur":"ClickHouse","zh-CN":"ClickHouse"};

export function settings_integrations_provider_clickhouse(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
