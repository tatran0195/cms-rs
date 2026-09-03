import { getLocale } from '../runtime.js';

const translations = {"ar":"https://…/changelog","bn":"https://…/changelog","de":"https://…/changelog","en":"https://…/changelog","es":"https://…/changelog","fr":"https://…/changelog","hi":"https://…/changelog","id":"https://…/changelog","pt-BR":"https://…/changelog","ru":"https://…/changelog","ur":"https://…/changelog","zh-CN":"https://…/changelog"};

export function settings_banner_linkurl_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
