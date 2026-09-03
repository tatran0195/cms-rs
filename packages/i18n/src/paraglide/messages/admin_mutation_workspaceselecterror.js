import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر اختيار مساحة عمل العميل.","bn":"Could not select the customer workspace.","de":"Could not select the customer workspace.","en":"Could not select the customer workspace.","es":"Could not select the customer workspace.","fr":"Could not select the customer workspace.","hi":"Could not select the customer workspace.","id":"Could not select the customer workspace.","pt-BR":"Could not select the customer workspace.","ru":"Could not select the customer workspace.","ur":"Could not select the customer workspace.","zh-CN":"Could not select the customer workspace."};

export function admin_mutation_workspaceselecterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
