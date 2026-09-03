import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} مشكلات نطاق","bn":"{count} domain issues","de":"{count} domain issues","en":"{count} domain issues","es":"{count} domain issues","fr":"{count} domain issues","hi":"{count} domain issues","id":"{count} domain issues","pt-BR":"{count} domain issues","ru":"{count} domain issues","ur":"{count} domain issues","zh-CN":"{count} domain issues"};

export function admin_sites_domainissuecount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
