import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء الشريط الجانبي","bn":"সাইডবার লুকান","de":"Seitenleiste ausblenden","en":"Hide sidebar","es":"Ocultar barra lateral","fr":"Masquer la barre latérale","hi":"साइडबार छिपाएँ","id":"Sembunyikan bilah sisi","pt-BR":"Ocultar barra lateral","ru":"Скрыть боковую панель","ur":"سائڈبار چھپائیں۔","zh-CN":"隐藏侧边栏"};

export function editor_hidesidebar(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
