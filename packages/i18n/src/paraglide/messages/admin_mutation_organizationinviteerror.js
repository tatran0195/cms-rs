import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذرت دعوة المؤسسة","bn":"Could not invite the organization","de":"Could not invite the organization","en":"Could not invite the organization","es":"Could not invite the organization","fr":"Could not invite the organization","hi":"Could not invite the organization","id":"Could not invite the organization","pt-BR":"Could not invite the organization","ru":"Could not invite the organization","ur":"Could not invite the organization","zh-CN":"Could not invite the organization"};

export function admin_mutation_organizationinviteerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
