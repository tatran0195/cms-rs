import { getLocale } from '../runtime.js';

const translations = {"ar":"تلخيص","bn":"সারসংক্ষেপ","de":"Zusammenfassen","en":"Summarize","es":"resumir","fr":"Résumer","hi":"संक्षेप करें","id":"Ringkaslah","pt-BR":"Resumir","ru":"Подвести итог","ur":"خلاصہ کریں۔","zh-CN":"总结"};

export function editor_ai_summarize(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
