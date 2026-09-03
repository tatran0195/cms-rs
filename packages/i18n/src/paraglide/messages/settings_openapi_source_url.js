import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط URL","bn":"URL","de":"URL","en":"URL","es":"URL","fr":"URL","hi":"यूआरएल","id":"URL","pt-BR":"URL","ru":"URL-адрес","ur":"URL","zh-CN":"网址"};

export function settings_openapi_source_url(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
