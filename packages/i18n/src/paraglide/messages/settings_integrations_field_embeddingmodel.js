import { getLocale } from '../runtime.js';

const translations = {"ar":"نموذج التضمين","bn":"এম্বেডিং মডেল","de":"Einbettungsmodell","en":"Embedding model","es":"Modelo de incrustación","fr":"Modèle d'intégration","hi":"एम्बेडिंग मॉडल","id":"Model Embedding","pt-BR":"Modelo de incorporação","ru":"Встраиваемая модель","ur":"ایمبیڈنگ ماڈل","zh-CN":"嵌入模型"};

export function settings_integrations_field_embeddingmodel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
