import { getLocale } from '../runtime.js';

const translations = {"ar":"التنقّل","bn":"নেভিগেশন","de":"Navigation","en":"Navigation","es":"Navegación","fr":"Navigation","hi":"नेविगेशन","id":"Navigasi","pt-BR":"Navegação","ru":"Навигация","ur":"نیویگیشن","zh-CN":"导航"};

export function editor_navigation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
