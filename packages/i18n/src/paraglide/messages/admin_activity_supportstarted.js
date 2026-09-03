import { getLocale } from '../runtime.js';

const translations = {"ar":"بدء وصول الدعم","bn":"Support Started","de":"Support Started","en":"Support Started","es":"Support Started","fr":"Support Started","hi":"Support Started","id":"Support Started","pt-BR":"Support Started","ru":"Support Started","ur":"Support Started","zh-CN":"Support Started"};

export function admin_activity_supportstarted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
