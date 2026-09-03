import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة التبويب","bn":"ট্যাব সরান","de":"Tab entfernen","en":"Remove tab","es":"Quitar pestaña","fr":"Supprimer l'onglet","hi":"टैब हटाएँ","id":"Hapus tab","pt-BR":"Remover guia","ru":"Удалить вкладку","ur":"ٹیب کو ہٹا دیں۔","zh-CN":"删除选项卡"};

export function settings_navbar_tabs_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
