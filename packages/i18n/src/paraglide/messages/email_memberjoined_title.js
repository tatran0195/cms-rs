import { getLocale } from '../runtime.js';

const translations = {"ar":"عضو جديد في {organizationName}","bn":"New teammate in {organizationName}","de":"New teammate in {organizationName}","en":"New teammate in {organizationName}","es":"New teammate in {organizationName}","fr":"New teammate in {organizationName}","hi":"New teammate in {organizationName}","id":"New teammate in {organizationName}","pt-BR":"New teammate in {organizationName}","ru":"New teammate in {organizationName}","ur":"New teammate in {organizationName}","zh-CN":"New teammate in {organizationName}"};

export function email_memberjoined_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
