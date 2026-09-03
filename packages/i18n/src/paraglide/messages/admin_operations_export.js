import { getLocale } from '../runtime.js';

const translations = {"ar":"التصدير","bn":"Export","de":"Export","en":"Export","es":"Export","fr":"Export","hi":"Export","id":"Export","pt-BR":"Export","ru":"Export","ur":"Export","zh-CN":"Export"};

export function admin_operations_export(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
