import { getLocale } from '../runtime.js';

const translations = {"ar":"متاح","bn":"উপলভ্য","de":"Verfügbar","en":"Available","es":"Disponible","fr":"Disponible","hi":"उपलब्ध","id":"Tersedia","pt-BR":"Disponível","ru":"Доступный","ur":"دستیاب","zh-CN":"可用"};

export function settings_integrations_availability_available(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
