import { getLocale } from '../runtime.js';

const translations = {"ar":"حالة العملاء والمواقع وعمليات النشر في Nibleaf Cloud.","bn":"Customer, site, and deployment health for Nibleaf Cloud.","de":"Customer, site, and deployment health for Nibleaf Cloud.","en":"Customer, site, and deployment health for Nibleaf Cloud.","es":"Customer, site, and deployment health for Nibleaf Cloud.","fr":"Customer, site, and deployment health for Nibleaf Cloud.","hi":"Customer, site, and deployment health for Nibleaf Cloud.","id":"Customer, site, and deployment health for Nibleaf Cloud.","pt-BR":"Customer, site, and deployment health for Nibleaf Cloud.","ru":"Customer, site, and deployment health for Nibleaf Cloud.","ur":"Customer, site, and deployment health for Nibleaf Cloud.","zh-CN":"Customer, site, and deployment health for Nibleaf Cloud."};

export function admin_overview_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
