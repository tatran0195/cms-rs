import { getLocale } from '../runtime.js';

const translations = {"ar":"تفعيل","bn":"সক্ষম করুন","de":"Aktivieren","en":"Enable","es":"Habilitar","fr":"Activer","hi":"सक्षम करें","id":"Aktifkan","pt-BR":"Habilitar","ru":"Включить","ur":"فعال کریں۔","zh-CN":"启用"};

export function settings_exports_workflow_enable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
