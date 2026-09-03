import { getLocale } from '../runtime.js';

const translations = {"ar":"الفرع الافتراضي","bn":"ডিফল্ট শাখা","de":"Standardzweig","en":"Default branch","es":"Rama predeterminada","fr":"Branche par défaut","hi":"डिफ़ॉल्ट शाखा","id":"Cabang bawaan","pt-BR":"Filial padrão","ru":"Ветка по умолчанию","ur":"ڈیفالٹ برانچ","zh-CN":"默认分支"};

export function settings_git_defaultbranch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
