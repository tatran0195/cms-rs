import { getLocale } from '../runtime.js';

const translations = {"ar":"مساعد الذكاء الاصطناعي","bn":"এআই সহায়তা","de":"KI-Unterstützung","en":"AI assist","es":"asistencia de IA","fr":"Assistance IA","hi":"एआई सहायता","id":"bantuan AI","pt-BR":"Assistência de IA","ru":"ИИ-ассистент","ur":"AI معاونت","zh-CN":"人工智能辅助"};

export function editor_ai_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
