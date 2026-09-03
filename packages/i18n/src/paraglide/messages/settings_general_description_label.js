import { getLocale } from '../runtime.js';

const translations = {"ar":"الوصف","bn":"বর্ণনা","de":"Beschreibung","en":"Description","es":"Descripción","fr":"Descriptif","hi":"विवरण","id":"Deskripsi","pt-BR":"Descrição","ru":"Описание","ur":"تفصیل","zh-CN":"描述"};

export function settings_general_description_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
