import { getLocale } from '../runtime.js';

const translations = {"ar":"المؤسسة","bn":"সংস্থা","de":"Organisation","en":"Organization","es":"Entidad","fr":"Organisation","hi":"संगठन","id":"Organisasi","pt-BR":"Organização","ru":"Организация","ur":"تنظیم","zh-CN":"组织"};

export function settings_integrations_github_org(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
