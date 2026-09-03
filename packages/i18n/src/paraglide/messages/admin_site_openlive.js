import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح موقع {site}","bn":"Open Live {site}","de":"Open Live {site}","en":"Open Live {site}","es":"Open Live {site}","fr":"Open Live {site}","hi":"Open Live {site}","id":"Open Live {site}","pt-BR":"Open Live {site}","ru":"Open Live {site}","ur":"Open Live {site}","zh-CN":"Open Live {site}"};

export function admin_site_openlive(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
