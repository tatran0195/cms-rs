import { getLocale } from '../runtime.js';

const translations = {"ar":"وضع التشغيل","bn":"Runtime","de":"Runtime","en":"Runtime","es":"Runtime","fr":"Runtime","hi":"Runtime","id":"Runtime","pt-BR":"Runtime","ru":"Runtime","ur":"Runtime","zh-CN":"Runtime"};

export function settings_search_diagnostics_runtime(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
