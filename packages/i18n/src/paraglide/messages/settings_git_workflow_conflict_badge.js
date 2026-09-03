import { getLocale } from '../runtime.js';

const translations = {"ar":"تعارض","bn":"দ্বন্দ্ব","de":"Konflikt","en":"Conflict","es":"Conflicto","fr":"Conflit","hi":"संघर्ष","id":"Konflik","pt-BR":"Conflito","ru":"Конфликт","ur":"تنازعہ","zh-CN":"冲突"};

export function settings_git_workflow_conflict_badge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
