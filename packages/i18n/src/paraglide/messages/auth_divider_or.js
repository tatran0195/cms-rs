import { getLocale } from '../runtime.js';

const translations = {"ar":"أو","bn":"বা","de":"oder","en":"or","es":"o","fr":"ou","hi":"या","id":"atau","pt-BR":"ou","ru":"или","ur":"یا","zh-CN":"或"};

export function auth_divider_or(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
