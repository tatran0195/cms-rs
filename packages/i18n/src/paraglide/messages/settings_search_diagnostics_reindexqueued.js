import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت إضافة إعادة الفهرسة إلى قائمة الانتظار.","bn":"Reindexing was queued.","de":"Reindexing was queued.","en":"Reindexing was queued.","es":"Reindexing was queued.","fr":"Reindexing was queued.","hi":"Reindexing was queued.","id":"Reindexing was queued.","pt-BR":"Reindexing was queued.","ru":"Reindexing was queued.","ur":"Reindexing was queued.","zh-CN":"Reindexing was queued."};

export function settings_search_diagnostics_reindexqueued(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
