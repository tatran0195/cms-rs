import { getLocale } from '../runtime.js';

const translations = {"ar":"مرجع OpenAPI","bn":"OpenAPI রেফারেন্স","de":"OpenAPI Referenz","en":"OpenAPI reference","es":"OpenAPI referencia","fr":"Référence OpenAPI","hi":"OpenAPI संदर्भ","id":"OpenAPI referensi","pt-BR":"Referência OpenAPI","ru":"ссылка на OpenAPI","ur":"OpenAPI حوالہ","zh-CN":"OpenAPI 参考"};

export function settings_openapi_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
