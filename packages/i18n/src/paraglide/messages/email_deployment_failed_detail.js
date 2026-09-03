import { getLocale } from '../runtime.js';

const translations = {"ar":"الخطأ: {error}","bn":"Error: {error}","de":"Error: {error}","en":"Error: {error}","es":"Error: {error}","fr":"Error: {error}","hi":"Error: {error}","id":"Error: {error}","pt-BR":"Error: {error}","ru":"Error: {error}","ur":"Error: {error}","zh-CN":"Error: {error}"};

export function email_deployment_failed_detail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
