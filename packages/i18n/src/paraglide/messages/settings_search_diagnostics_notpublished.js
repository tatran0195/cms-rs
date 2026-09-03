import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر هذا المشروع قبل فحص فهرسه الحالي.","bn":"Publish this project before inspecting its current index.","de":"Publish this project before inspecting its current index.","en":"Publish this project before inspecting its current index.","es":"Publish this project before inspecting its current index.","fr":"Publish this project before inspecting its current index.","hi":"Publish this project before inspecting its current index.","id":"Publish this project before inspecting its current index.","pt-BR":"Publish this project before inspecting its current index.","ru":"Publish this project before inspecting its current index.","ur":"Publish this project before inspecting its current index.","zh-CN":"Publish this project before inspecting its current index."};

export function settings_search_diagnostics_notpublished(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
