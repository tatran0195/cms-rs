import { getLocale } from '../runtime.js';

const translations = {"ar":"الوضع","bn":"ধরন","de":"Modus","en":"Mode","es":"Modalidad","fr":"Mode de fonctionnement","hi":"मोड","id":"Modus","pt-BR":"Modo","ru":"Режим","ur":"موڈ","zh-CN":"模式"};

export function settings_integrations_field_mode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
