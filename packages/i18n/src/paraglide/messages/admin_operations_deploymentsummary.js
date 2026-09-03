import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر v{version} · {pages} صفحات","bn":"Deployment v{version} · {pages} pages","de":"Deployment v{version} · {pages} pages","en":"Deployment v{version} · {pages} pages","es":"Deployment v{version} · {pages} pages","fr":"Deployment v{version} · {pages} pages","hi":"Deployment v{version} · {pages} pages","id":"Deployment v{version} · {pages} pages","pt-BR":"Deployment v{version} · {pages} pages","ru":"Deployment v{version} · {pages} pages","ur":"Deployment v{version} · {pages} pages","zh-CN":"Deployment v{version} · {pages} pages"};

export function admin_operations_deploymentsummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
