import { getLocale } from '../runtime.js';

const translations = {"ar":"https://hooks.slack.com/services/…","bn":"https://hooks.slack.com/services/…","de":"https://hooks.slack.com/services/…","en":"https://hooks.slack.com/services/…","es":"https://hooks.slack.com/services/…","fr":"https://hooks.slack.com/services/…","hi":"https://hooks.slack.com/services/…","id":"https://hooks.slack.com/services/…","pt-BR":"https://hooks.slack.com/services/…","ru":"https://hooks.slack.com/services/…","ur":"https://hooks.slack.com/services/…","zh-CN":"https://hooks.slack.com/services/…"};

export function settings_integrations_placeholder_slack(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
