import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة تبويب","bn":"ট্যাব যোগ করুন","de":"Registerkarte hinzufügen","en":"Add tab","es":"Agregar pestaña","fr":"Ajouter un onglet","hi":"टैब जोड़ें","id":"Tambahkan tab","pt-BR":"Adicionar guia","ru":"Добавить вкладку","ur":"ٹیب شامل کریں۔","zh-CN":"添加选项卡"};

export function settings_navbar_tabs_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
