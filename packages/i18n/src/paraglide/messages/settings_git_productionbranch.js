import { getLocale } from '../runtime.js';

const translations = {"ar":"الفرع","bn":"শাখা","de":"Zweig","en":"Branch","es":"Sucursal","fr":"Branche","hi":"शाखा","id":"Cabang","pt-BR":"Filial","ru":"Филиал","ur":"شاخ","zh-CN":"分公司"};

export function settings_git_productionbranch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
