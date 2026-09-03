import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين عبارات البحث العامة","bn":"Store public search terms","de":"Store public search terms","en":"Store public search terms","es":"Store public search terms","fr":"Store public search terms","hi":"Store public search terms","id":"Store public search terms","pt-BR":"Store public search terms","ru":"Store public search terms","ur":"Store public search terms","zh-CN":"Store public search terms"};

export function settings_analytics_searchterms_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
