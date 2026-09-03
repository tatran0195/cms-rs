import { getLocale } from '../runtime.js';

const translations = {"ar":"صلاحية وصولك إلى {projectName}","bn":"Your access to {projectName}","de":"Your access to {projectName}","en":"Your access to {projectName}","es":"Your access to {projectName}","fr":"Your access to {projectName}","hi":"Your access to {projectName}","id":"Your access to {projectName}","pt-BR":"Your access to {projectName}","ru":"Your access to {projectName}","ur":"Your access to {projectName}","zh-CN":"Your access to {projectName}"};

export function email_readerinvite_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
