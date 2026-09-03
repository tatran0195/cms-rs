import { getLocale } from '../runtime.js';

const translations = {"ar":"GitLab","bn":"GitLab","de":"GitLab","en":"GitLab","es":"GitLab","fr":"GitLab","hi":"GitLab","id":"GitLab","pt-BR":"GitLab","ru":"GitLab","ur":"GitLab","zh-CN":"GitLab"};

export function settings_integrations_provider_gitlab(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
