import { getLocale } from '../runtime.js';

const translations = {"ar":"نموذج المسودة","bn":"খসড়া মডেল","de":"Draft Modell","en":"Draft model","es":"Borrador del modelo","fr":"Projet de modèle","hi":"प्रारूप मॉडल","id":"Model Draft","pt-BR":"Modelo de rascunho","ru":"Проект модели","ur":"ڈرافٹ ماڈل","zh-CN":"模式草案"};

export function settings_integrations_field_draftmodel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
