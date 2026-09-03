import { getLocale } from '../runtime.js';

const translations = {"ar":"أسباب عدم وجود إجابة","bn":"No-answer reasons","de":"No-answer reasons","en":"No-answer reasons","es":"No-answer reasons","fr":"No-answer reasons","hi":"No-answer reasons","id":"No-answer reasons","pt-BR":"No-answer reasons","ru":"No-answer reasons","ur":"No-answer reasons","zh-CN":"No-answer reasons"};

export function analytics_section_noanswerreasons(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
