import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة مرساة","bn":"অ্যাঙ্কর যোগ করুন","de":"Anker hinzufügen","en":"Add anchor","es":"Agregar ancla","fr":"Ajouter une ancre","hi":"एंकर जोड़ें","id":"Tambahkan jangkar","pt-BR":"Adicionar âncora","ru":"Добавить якорь","ur":"لنگر شامل کریں۔","zh-CN":"添加锚点"};

export function settings_navbar_anchors_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
