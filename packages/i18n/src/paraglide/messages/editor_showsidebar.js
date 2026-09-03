import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار الشريط الجانبي","bn":"সাইডবার দেখান","de":"Seitenleiste anzeigen","en":"Show sidebar","es":"Mostrar barra lateral","fr":"Afficher la barre latérale","hi":"साइडबार दिखाएँ","id":"Tampilkan bilah sisi","pt-BR":"Mostrar barra lateral","ru":"Показать боковую панель","ur":"سائڈبار دکھائیں۔","zh-CN":"显示侧边栏"};

export function editor_showsidebar(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
