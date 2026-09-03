import { getLocale } from '../runtime.js';

const translations = {"ar":"إجابات ذكاء اصطناعي موثّقة","bn":"উৎসভিত্তিক AI উত্তর","de":"Belegte KI-Antworten","en":"Grounded AI answers","es":"Respuestas de IA fundamentadas","fr":"Réponses IA étayées","hi":"स्रोत-आधारित AI उत्तर","id":"Jawaban AI berbasis sumber","pt-BR":"Respostas de IA fundamentadas","ru":"Обоснованные ответы ИИ","ur":"حوالہ جاتی AI جوابات","zh-CN":"有依据的 AI 回答"};

export function settings_search_aianswers_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
