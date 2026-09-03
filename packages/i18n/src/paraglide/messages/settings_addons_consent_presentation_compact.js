import { getLocale } from '../runtime.js';

const translations = {"ar":"مدمجة","bn":"সংক্ষিপ্ত","de":"Kompakt","en":"Compact","es":"Compacta","fr":"Compacte","hi":"संक्षिप्त","id":"Ringkas","pt-BR":"Compacto","ru":"Компактная","ur":"مختصر","zh-CN":"紧凑"};

export function settings_addons_consent_presentation_compact(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
