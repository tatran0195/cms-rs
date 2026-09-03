import { getLocale } from '../runtime.js';

const translations = {"ar":"نموذج الإجابة","bn":"উত্তর মডেল","de":"Antwortmodell","en":"Answer model","es":"Modelo de respuesta","fr":"Modèle de réponse","hi":"उत्तर मॉडल","id":"Model jawaban","pt-BR":"Modelo de resposta","ru":"Модель ответа","ur":"جواب کا ماڈل","zh-CN":"答题模式"};

export function settings_integrations_field_answermodel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
