import { getLocale } from '../runtime.js';

const translations = {"ar":"تسمية التنقل","bn":"নেভিগেশন লেবেল","de":"Navigationsetikett","en":"Navigation label","es":"Etiqueta de navegación","fr":"Étiquette de navigation","hi":"नेविगेशन लेबल","id":"Label navigasi","pt-BR":"Etiqueta de navegação","ru":"Метка навигации","ur":"نیویگیشن لیبل","zh-CN":"导航标签"};

export function settings_openapi_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
