import { getLocale } from '../runtime.js';

const translations = {"ar":"الفرع","bn":"শাখা","de":"Zweigstelle","en":"Branch","es":"Sucursal","fr":"Branche","hi":"शाखा","id":"Cabang","pt-BR":"Ramo","ru":"филиал","ur":"شاخ","zh-CN":"处"};

export function settings_integrations_field_branch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
