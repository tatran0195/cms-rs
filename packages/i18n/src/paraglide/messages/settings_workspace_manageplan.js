import { getLocale } from '../runtime.js';

const translations = {"ar":"إدارة الخطة","bn":"পরিকল্পনা পরিচালনা করুন","de":"Plan verwalten","en":"Manage plan","es":"Administrar plan","fr":"Gérer le forfait","hi":"योजना प्रबंधित करें","id":"Kelola rencana","pt-BR":"Gerenciar plano","ru":"Управление планом","ur":"پلان کا انتظام کریں۔","zh-CN":"管理计划"};

export function settings_workspace_manageplan(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
