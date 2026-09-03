import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التلخيص…","bn":"সারসংক্ষেপ...","de":"Zusammenfassend…","en":"Summarizing…","es":"Resumiendo…","fr":"Résumer…","hi":"संक्षेप में...","id":"Meringkas…","pt-BR":"Resumindo…","ru":"Подведение итогов…","ur":"خلاصہ کر رہا ہے…","zh-CN":"总结..."};

export function editor_ai_summarizing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
