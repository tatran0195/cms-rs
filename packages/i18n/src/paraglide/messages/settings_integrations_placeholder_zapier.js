import { getLocale } from '../runtime.js';

const translations = {"ar":"https://hooks.zapier.com/hooks/catch/…","bn":"https://hooks.zapier.com/hooks/catch/…","de":"https://hooks.zapier.com/hooks/catch/…","en":"https://hooks.zapier.com/hooks/catch/…","es":"https://hooks.zapier.com/hooks/catch/…","fr":"https://hooks.zapier.com/hooks/catch/…","hi":"https://hooks.zapier.com/hooks/catch/…","id":"https://hooks.zapier.com/hooks/catch/…","pt-BR":"https://hooks.zapier.com/hooks/catch/…","ru":"https://hooks.zapier.com/hooks/catch/…","ur":"https://hooks.zapier.com/hooks/catch/…","zh-CN":"https://hooks.zapier.com/hooks/catch/…"};

export function settings_integrations_placeholder_zapier(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
