import { getLocale } from '../runtime.js';

const translations = {"ar":"شريط التنقل","bn":"নববার","de":"Navigationsleiste","en":"Navbar","es":"Barra de navegación","fr":"Barre de navigation","hi":"नेवबार","id":"bilah navigasi","pt-BR":"Barra de navegação","ru":"Навбар","ur":"نوبار","zh-CN":"导航栏"};

export function settings_navbar(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
