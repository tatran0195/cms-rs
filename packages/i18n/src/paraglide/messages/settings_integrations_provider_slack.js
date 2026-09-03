import { getLocale } from '../runtime.js';

const translations = {"ar":"Slack","bn":"Slack","de":"Slack","en":"Slack","es":"Slack","fr":"Slack","hi":"Slack","id":"Slack","pt-BR":"Slack","ru":"Slack","ur":"Slack","zh-CN":"Slack"};

export function settings_integrations_provider_slack(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
