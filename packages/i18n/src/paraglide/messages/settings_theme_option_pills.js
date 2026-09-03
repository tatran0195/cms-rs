import { getLocale } from '../runtime.js';

const translations = {"ar":"كبسولات","bn":"Pills","de":"Pills","en":"Pills","es":"Pills","fr":"Pills","hi":"Pills","id":"Pills","pt-BR":"Pills","ru":"Pills","ur":"Pills","zh-CN":"Pills"};

export function settings_theme_option_pills(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
