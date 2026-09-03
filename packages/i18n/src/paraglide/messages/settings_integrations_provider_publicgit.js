import { getLocale } from '../runtime.js';

const translations = {"ar":"Public Git","bn":"Public Git","de":"Public Git","en":"Public Git","es":"Public Git","fr":"Public Git","hi":"Public Git","id":"Public Git","pt-BR":"Public Git","ru":"Public Git","ur":"Public Git","zh-CN":"Public Git"};

export function settings_integrations_provider_publicgit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
