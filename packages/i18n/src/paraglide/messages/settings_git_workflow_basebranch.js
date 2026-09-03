import { getLocale } from '../runtime.js';

const translations = {"ar":"الفرع الأساسي","bn":"বেস শাখা","de":"Basiszweig","en":"Base branch","es":"sucursal base","fr":"Branche de base","hi":"आधार शाखा","id":"Cabang dasar","pt-BR":"Filial base","ru":"Базовая ветка","ur":"بیس برانچ","zh-CN":"基地支部"};

export function settings_git_workflow_basebranch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
