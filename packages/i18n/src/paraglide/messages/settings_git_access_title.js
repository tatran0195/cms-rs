import { getLocale } from '../runtime.js';

const translations = {"ar":"الوصول عبر Git","bn":"গিট অ্যাক্সেস","de":"Git-Zugriff","en":"Git access","es":"acceso git","fr":"Accès à Git","hi":"गिट पहुंच","id":"Akses Git","pt-BR":"Acesso Git","ru":"Доступ к Git","ur":"گٹ رسائی","zh-CN":"Git 访问"};

export function settings_git_access_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
