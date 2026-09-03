import { getLocale } from '../runtime.js';

const translations = {"ar":"Google Analytics","bn":"Google Analytics","de":"Google Analytics","en":"Google Analytics","es":"Google Analytics","fr":"Google Analytics","hi":"Google Analytics","id":"Google Analytics","pt-BR":"Google Analytics","ru":"Google Analytics","ur":"Google Analytics","zh-CN":"Google Analytics"};

export function settings_integrations_provider_googleanalytics(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
