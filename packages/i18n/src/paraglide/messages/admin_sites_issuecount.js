import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} مشكلات","bn":"{count} issues","de":"{count} issues","en":"{count} issues","es":"{count} issues","fr":"{count} issues","hi":"{count} issues","id":"{count} issues","pt-BR":"{count} issues","ru":"{count} issues","ur":"{count} issues","zh-CN":"{count} issues"};

export function admin_sites_issuecount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
