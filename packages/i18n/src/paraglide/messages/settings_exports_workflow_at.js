import { getLocale } from '../runtime.js';

const translations = {"ar":"عند","bn":"এ","de":"bei","en":"at","es":"en","fr":"à","hi":"पर","id":"di","pt-BR":"em","ru":"в","ur":"پر","zh-CN":"在"};

export function settings_exports_workflow_at(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
