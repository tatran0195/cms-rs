import { getLocale } from '../runtime.js';

const translations = {"ar":"الذكاء الاصطناعي","bn":"এআই","de":"KI","en":"AI","es":"IA","fr":"IA","hi":"ऐ","id":"AI","pt-BR":"IA","ru":"ИИ","ur":"اے آئی","zh-CN":"人工智能"};

export function editor_ai(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
