import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذرت إضافة إعادة الفهرسة إلى قائمة الانتظار.","bn":"Reindexing could not be queued.","de":"Reindexing could not be queued.","en":"Reindexing could not be queued.","es":"Reindexing could not be queued.","fr":"Reindexing could not be queued.","hi":"Reindexing could not be queued.","id":"Reindexing could not be queued.","pt-BR":"Reindexing could not be queued.","ru":"Reindexing could not be queued.","ur":"Reindexing could not be queued.","zh-CN":"Reindexing could not be queued."};

export function settings_search_diagnostics_reindexerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
