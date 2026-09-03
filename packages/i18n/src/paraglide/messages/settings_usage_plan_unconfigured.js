import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد خطة مُعدّة","bn":"No plan configured","de":"No plan configured","en":"No plan configured","es":"No plan configured","fr":"No plan configured","hi":"No plan configured","id":"No plan configured","pt-BR":"No plan configured","ru":"No plan configured","ur":"No plan configured","zh-CN":"No plan configured"};

export function settings_usage_plan_unconfigured(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
