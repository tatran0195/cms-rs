import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار البحث في شريط التنقّل","bn":"navbar এ অনুসন্ধান দেখান","de":"Suche in der Navigationsleiste anzeigen","en":"Show search in navbar","es":"Mostrar búsqueda en la barra de navegación","fr":"Afficher la recherche dans la barre de navigation","hi":"नावबार में खोज दिखाएँ","id":"Tampilkan pencarian di bilah navigasi","pt-BR":"Mostrar pesquisa na barra de navegação","ru":"Показать поиск в панели навигации","ur":"navbar میں تلاش دکھائیں۔","zh-CN":"在导航栏中显示搜索"};

export function settings_navbar_showsearch_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
