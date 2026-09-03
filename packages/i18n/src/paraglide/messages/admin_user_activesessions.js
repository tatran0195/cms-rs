import { getLocale } from '../runtime.js';

const translations = {"ar":"الجلسات النشطة","bn":"Active Sessions","de":"Active Sessions","en":"Active Sessions","es":"Active Sessions","fr":"Active Sessions","hi":"Active Sessions","id":"Active Sessions","pt-BR":"Active Sessions","ru":"Active Sessions","ur":"Active Sessions","zh-CN":"Active Sessions"};

export function admin_user_activesessions(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
