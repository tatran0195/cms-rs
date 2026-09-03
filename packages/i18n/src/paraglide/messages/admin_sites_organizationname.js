import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم المؤسسة","bn":"Organization name","de":"Organization name","en":"Organization name","es":"Organization name","fr":"Organization name","hi":"Organization name","id":"Organization name","pt-BR":"Organization name","ru":"Organization name","ur":"Organization name","zh-CN":"Organization name"};

export function admin_sites_organizationname(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
