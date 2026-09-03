import { getLocale } from '../runtime.js';

const translations = {"ar":"فروع بأسلوب Git","bn":"গিট-স্টাইল শাখা","de":"Zweige im Git-Stil","en":"Git-style branches","es":"Ramas estilo Git","fr":"Branches de style Git","hi":"गिट-शैली की शाखाएँ","id":"Cabang bergaya Git","pt-BR":"Ramos estilo Git","ru":"Ветки в стиле Git","ur":"گٹ طرز کی شاخیں۔","zh-CN":"Git 风格的分支"};

export function settings_plan_selfhosted_feature_branches(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
