import { getLocale } from '../runtime.js';

const translations = {"ar":"الأساس","bn":"বেস","de":"Basis","en":"Base","es":"bases","fr":"Socle","hi":"आधार","id":"Pangkalan","pt-BR":"base","ru":"База","ur":"بیس","zh-CN":"基地"};

export function settings_git_workflow_conflict_base(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
