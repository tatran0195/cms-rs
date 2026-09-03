import { getLocale } from '../runtime.js';

const translations = {"ar":"وصول الدعم","bn":"Support access","de":"Support access","en":"Support access","es":"Support access","fr":"Support access","hi":"Support access","id":"Support access","pt-BR":"Support access","ru":"Support access","ur":"Support access","zh-CN":"Support access"};

export function admin_support_action(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
