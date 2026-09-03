import { getLocale } from '../runtime.js';

const translations = {"ar":"إدارة هذا الموقع","bn":"এই সাইট পরিচালনা করুন","de":"Verwalten Sie diese Website","en":"Manage this site","es":"Administrar este sitio","fr":"Gérer ce site","hi":"इस साइट को प्रबंधित करें","id":"Kelola situs ini","pt-BR":"Gerenciar este site","ru":"Управлять этим сайтом","ur":"اس سائٹ کا نظم کریں۔","zh-CN":"管理这个网站"};

export function overview_manage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
