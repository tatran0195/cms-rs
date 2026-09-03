import { getLocale } from '../runtime.js';

const translations = {"ar":"الأمان","bn":"নিরাপত্তা","de":"Sicherheit","en":"Security","es":"Seguridad","fr":"Sécurité","hi":"सुरक्षा","id":"Keamanan","pt-BR":"Segurança","ru":"Безопасность","ur":"سیکورٹی","zh-CN":"安全性"};

export function settings_notifications_group_security(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
