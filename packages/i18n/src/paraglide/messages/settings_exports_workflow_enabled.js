import { getLocale } from '../runtime.js';

const translations = {"ar":"مفعّل","bn":"সক্রিয়","de":"aktiviert","en":"enabled","es":"habilitado","fr":"activé","hi":"सक्षम","id":"diaktifkan","pt-BR":"habilitado","ru":"включен","ur":"فعال","zh-CN":"已启用"};

export function settings_exports_workflow_enabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
