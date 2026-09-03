import { getLocale } from '../runtime.js';

const translations = {"ar":"اقتراح","bn":"সাজেশন","de":"Vorschlag","en":"Suggestion","es":"sugerencia","fr":"Suggestions","hi":"सुझाव","id":"Saran","pt-BR":"Sugestão","ru":"Предложение","ur":"تجویز","zh-CN":"建议"};

export function editor_ai_suggestionlabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
