import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تسجيل {stale} مقاطع قديمة و{failed} مقاطع فاشلة.","bn":"{stale} stale and {failed} failed chunks were recorded.","de":"{stale} stale and {failed} failed chunks were recorded.","en":"{stale} stale and {failed} failed chunks were recorded.","es":"{stale} stale and {failed} failed chunks were recorded.","fr":"{stale} stale and {failed} failed chunks were recorded.","hi":"{stale} stale and {failed} failed chunks were recorded.","id":"{stale} stale and {failed} failed chunks were recorded.","pt-BR":"{stale} stale and {failed} failed chunks were recorded.","ru":"{stale} stale and {failed} failed chunks were recorded.","ur":"{stale} stale and {failed} failed chunks were recorded.","zh-CN":"{stale} stale and {failed} failed chunks were recorded."};

export function settings_search_diagnostics_issuesbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
