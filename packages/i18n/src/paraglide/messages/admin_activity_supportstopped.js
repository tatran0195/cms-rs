import { getLocale } from '../runtime.js';

const translations = {"ar":"إيقاف وصول الدعم","bn":"Support Stopped","de":"Support Stopped","en":"Support Stopped","es":"Support Stopped","fr":"Support Stopped","hi":"Support Stopped","id":"Support Stopped","pt-BR":"Support Stopped","ru":"Support Stopped","ur":"Support Stopped","zh-CN":"Support Stopped"};

export function admin_activity_supportstopped(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
