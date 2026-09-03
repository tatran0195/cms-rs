import { getLocale } from '../runtime.js';

const translations = {"ar":"مرجع API","bn":"API রেফারেন্স","de":"API Referenz","en":"API Reference","es":"API Referencia","fr":"API Référence","hi":"API संदर्भ","id":"API Referensi","pt-BR":"API Referência","ru":"API Справочник","ur":"API حوالہ","zh-CN":"API 参考"};

export function settings_openapi(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
