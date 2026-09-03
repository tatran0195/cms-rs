import { getLocale } from '../runtime.js';

const translations = {"ar":"OpenRouter","bn":"OpenRouter","de":"OpenRouter","en":"OpenRouter","es":"OpenRouter","fr":"OpenRouter","hi":"OpenRouter","id":"OpenRouter","pt-BR":"OpenRouter","ru":"OpenRouter","ur":"OpenRouter","zh-CN":"OpenRouter"};

export function settings_integrations_provider_openrouter(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
