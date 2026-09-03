import { getLocale } from '../runtime.js';

const translations = {"ar":"مشكلات النطاق: {count}","bn":"Domain Issues {count}","de":"Domain Issues {count}","en":"Domain Issues {count}","es":"Domain Issues {count}","fr":"Domain Issues {count}","hi":"Domain Issues {count}","id":"Domain Issues {count}","pt-BR":"Domain Issues {count}","ru":"Domain Issues {count}","ur":"Domain Issues {count}","zh-CN":"Domain Issues {count}"};

export function admin_site_domainissues(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
