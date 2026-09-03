import { getLocale } from '../runtime.js';

const translations = {"ar":"النطاق","bn":"ডোমেইন","de":"Domäne","en":"Domain","es":"Dominio","fr":"Domaine","hi":"डोमेन","id":"Ranah","pt-BR":"Domínio","ru":"домен","ur":"ڈومین","zh-CN":"域名"};

export function settings_integrations_field_domain(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
