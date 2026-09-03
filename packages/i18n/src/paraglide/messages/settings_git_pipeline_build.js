import { getLocale } from '../runtime.js';

const translations = {"ar":"البناء","bn":"নির্মাণ করুন","de":"Bauen","en":"Build","es":"construir","fr":"Construire","hi":"निर्माण","id":"Membangun","pt-BR":"Construir","ru":"Построить","ur":"تعمیر کریں۔","zh-CN":"构建"};

export function settings_git_pipeline_build(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
