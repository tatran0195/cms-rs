import { getLocale } from '../runtime.js';

const translations = {"ar":"فهرسة البحث غير مهيأة لهذه النسخة.","bn":"Search indexing is not configured for this instance.","de":"Search indexing is not configured for this instance.","en":"Search indexing is not configured for this instance.","es":"Search indexing is not configured for this instance.","fr":"Search indexing is not configured for this instance.","hi":"Search indexing is not configured for this instance.","id":"Search indexing is not configured for this instance.","pt-BR":"Search indexing is not configured for this instance.","ru":"Search indexing is not configured for this instance.","ur":"Search indexing is not configured for this instance.","zh-CN":"Search indexing is not configured for this instance."};

export function settings_search_diagnostics_notconfigured(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
