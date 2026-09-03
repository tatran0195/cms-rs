import { getLocale } from '../runtime.js';

const translations = {"ar":"الظهور","bn":"দৃশ্যমানতা","de":"Sichtbarkeit","en":"Visibility","es":"Visibilidad","fr":"Visibilité","hi":"दृश्यता","id":"Visibilitas","pt-BR":"Visibilidade","ru":"Видимость","ur":"مرئیت","zh-CN":"能见度"};

export function settings_general_visibility_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
