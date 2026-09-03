import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء تصدير","bn":"রপ্তানি তৈরি করুন","de":"Export erstellen","en":"Create export","es":"Crear exportación","fr":"Créer une exportation","hi":"निर्यात बनाएं","id":"Buat ekspor","pt-BR":"Criar exportação","ru":"Создать экспорт","ur":"ایکسپورٹ بنائیں","zh-CN":"创建导出"};

export function settings_exports_workflow_create(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
