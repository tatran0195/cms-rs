import { getLocale } from '../runtime.js';

const translations = {"ar":"أُنشئ رابط دعوة المالك","bn":"Owner invitation link created","de":"Owner invitation link created","en":"Owner invitation link created","es":"Owner invitation link created","fr":"Owner invitation link created","hi":"Owner invitation link created","id":"Owner invitation link created","pt-BR":"Owner invitation link created","ru":"Owner invitation link created","ur":"Owner invitation link created","zh-CN":"Owner invitation link created"};

export function admin_mutation_invitationlinkcreated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
