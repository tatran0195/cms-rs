import { getLocale } from '../runtime.js';

const translations = {"ar":"أرشيف ليلي","bn":"রাত্রিকালীন আর্কাইভ","de":"Nächtliches Archiv","en":"Nightly archive","es":"Archivo nocturno","fr":"Archives nocturnes","hi":"रात्रिकालीन संग्रह","id":"Arsip malam","pt-BR":"Arquivo noturno","ru":"Ночной архив","ur":"نائٹ آرکائیو","zh-CN":"每晚存档"};

export function settings_exports_workflow_defaultschedulename(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
