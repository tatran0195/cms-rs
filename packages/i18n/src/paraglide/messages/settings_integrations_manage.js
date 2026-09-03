import { getLocale } from '../runtime.js';

const translations = {"ar":"إدارة","bn":"পরিচালনা করুন","de":"Verwalten","en":"Manage","es":"Gestionar","fr":"Gérer","hi":"प्रबंधित करें","id":"Kelola","pt-BR":"Gerenciar","ru":"Управлять","ur":"انتظام کریں","zh-CN":"管理"};

export function settings_integrations_manage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
