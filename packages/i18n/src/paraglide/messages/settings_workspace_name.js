import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم مساحة العمل","bn":"কর্মক্ষেত্রের নাম","de":"Name des Arbeitsbereichs","en":"Workspace name","es":"Nombre del espacio de trabajo","fr":"Nom de l'espace de travail","hi":"कार्यस्थल का नाम","id":"Nama ruang kerja","pt-BR":"Nome do espaço de trabalho","ru":"Имя рабочей области","ur":"ورک اسپیس کا نام","zh-CN":"工作区名称"};

export function settings_workspace_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
