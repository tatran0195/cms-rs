import { getLocale } from '../runtime.js';

const translations = {"ar":"روابط شريط التنقّل","bn":"Navbar লিঙ্ক","de":"Navbar-Links","en":"Navbar links","es":"Enlaces de la barra de navegación","fr":"Liens de la barre de navigation","hi":"नेवबार लिंक","id":"Tautan bilah navigasi","pt-BR":"Links da barra de navegação","ru":"Ссылки на панель навигации","ur":"نوبار لنکس","zh-CN":"导航栏链接"};

export function settings_navbar_links_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
