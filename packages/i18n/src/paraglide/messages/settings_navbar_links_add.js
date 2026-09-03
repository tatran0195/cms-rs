import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة رابط","bn":"লিঙ্ক যোগ করুন","de":"Link hinzufügen","en":"Add link","es":"Agregar enlace","fr":"Ajouter un lien","hi":"लिंक जोड़ें","id":"Tambahkan tautan","pt-BR":"Adicionar link","ru":"Добавить ссылку","ur":"لنک شامل کریں۔","zh-CN":"添加链接"};

export function settings_navbar_links_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
