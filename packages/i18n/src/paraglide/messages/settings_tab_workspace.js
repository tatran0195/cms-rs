import { getLocale } from '../runtime.js';

const translations = {"ar":"مساحة العمل","bn":"কর্মক্ষেত্র","de":"Arbeitsbereich","en":"Workspace","es":"Espacio de trabajo","fr":"Espace de travail","hi":"कार्यक्षेत्र","id":"Ruang kerja","pt-BR":"Espaço de trabalho","ru":"Рабочая область","ur":"کام کی جگہ","zh-CN":"工作空间"};

export function settings_tab_workspace(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
