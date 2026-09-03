import { getLocale } from '../runtime.js';

const translations = {"ar":"المتغيّرات","bn":"ভেরিয়েবল","de":"Variablen","en":"Variables","es":"variables","fr":"Variables","hi":"चर","id":"Variabel","pt-BR":"Variáveis","ru":"Переменные","ur":"متغیرات","zh-CN":"变量"};

export function settings_variables(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
