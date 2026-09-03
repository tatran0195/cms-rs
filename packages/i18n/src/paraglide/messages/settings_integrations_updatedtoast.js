import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث التكامل","bn":"ইন্টিগ্রেশন আপডেট করা হয়েছে","de":"Integration aktualisiert","en":"Integration updated","es":"Integración actualizada","fr":"Intégration actualisée","hi":"एकीकरण अद्यतन","id":"Integrasi diperbarui","pt-BR":"Integração atualizada","ru":"Обновленная интеграция","ur":"انضمام اپ ڈیٹ ہو گیا","zh-CN":"更新整合"};

export function settings_integrations_updatedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
