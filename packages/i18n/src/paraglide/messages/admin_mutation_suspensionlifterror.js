import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر رفع الإيقاف","bn":"Could not lift the suspension","de":"Could not lift the suspension","en":"Could not lift the suspension","es":"Could not lift the suspension","fr":"Could not lift the suspension","hi":"Could not lift the suspension","id":"Could not lift the suspension","pt-BR":"Could not lift the suspension","ru":"Could not lift the suspension","ur":"Could not lift the suspension","zh-CN":"Could not lift the suspension"};

export function admin_mutation_suspensionlifterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
