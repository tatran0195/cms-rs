import { getLocale } from '../runtime.js';

const translations = {"ar":"قبول الدعوة","bn":"Accept invitation","de":"Accept invitation","en":"Accept invitation","es":"Accept invitation","fr":"Accept invitation","hi":"Accept invitation","id":"Accept invitation","pt-BR":"Accept invitation","ru":"Accept invitation","ur":"Accept invitation","zh-CN":"Accept invitation"};

export function email_invite_action(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
