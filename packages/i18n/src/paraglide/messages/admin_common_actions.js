import { getLocale } from '../runtime.js';

const translations = {"ar":"الإجراءات","bn":"Actions","de":"Actions","en":"Actions","es":"Actions","fr":"Actions","hi":"Actions","id":"Actions","pt-BR":"Actions","ru":"Actions","ur":"Actions","zh-CN":"Actions"};

export function admin_common_actions(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
