import { getLocale } from '../runtime.js';

const translations = {"ar":"استُعيد الموقع","bn":"Site restored","de":"Site restored","en":"Site restored","es":"Site restored","fr":"Site restored","hi":"Site restored","id":"Site restored","pt-BR":"Site restored","ru":"Site restored","ur":"Site restored","zh-CN":"Site restored"};

export function admin_mutation_siterestored(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
