import { getLocale } from '../runtime.js';

const translations = {"ar":"أعداد خالية من المحتوى للبحث والإجابات والرموز وعمل الفهرسة.","bn":"Content-free counts for search, answers, tokens, and indexing work.","de":"Content-free counts for search, answers, tokens, and indexing work.","en":"Content-free counts for search, answers, tokens, and indexing work.","es":"Content-free counts for search, answers, tokens, and indexing work.","fr":"Content-free counts for search, answers, tokens, and indexing work.","hi":"Content-free counts for search, answers, tokens, and indexing work.","id":"Content-free counts for search, answers, tokens, and indexing work.","pt-BR":"Content-free counts for search, answers, tokens, and indexing work.","ru":"Content-free counts for search, answers, tokens, and indexing work.","ur":"Content-free counts for search, answers, tokens, and indexing work.","zh-CN":"Content-free counts for search, answers, tokens, and indexing work."};

export function settings_usage_group_searchAi_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
