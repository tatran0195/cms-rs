import { getLocale } from '../runtime.js';

const translations = {"ar":"تعطيل","bn":"নিষ্ক্রিয় করুন","de":"Deaktivieren","en":"Disable","es":"Desactivar","fr":"Désactiver","hi":"अक्षम करें","id":"Nonaktifkan","pt-BR":"Desativar","ru":"Отключить","ur":"غیر فعال کریں۔","zh-CN":"禁用"};

export function settings_exports_workflow_disable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
