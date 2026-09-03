import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر جاهز","bn":"Publish Ready","de":"Publish Ready","en":"Publish Ready","es":"Publish Ready","fr":"Publish Ready","hi":"Publish Ready","id":"Publish Ready","pt-BR":"Publish Ready","ru":"Publish Ready","ur":"Publish Ready","zh-CN":"Publish Ready"};

export function admin_activity_publishready(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
