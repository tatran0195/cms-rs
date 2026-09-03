import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح واجهة العميل لموقع {site}","bn":"Open {site} customer view","de":"Open {site} customer view","en":"Open {site} customer view","es":"Open {site} customer view","fr":"Open {site} customer view","hi":"Open {site} customer view","id":"Open {site} customer view","pt-BR":"Open {site} customer view","ru":"Open {site} customer view","ur":"Open {site} customer view","zh-CN":"Open {site} customer view"};

export function admin_sites_opencustomerview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
