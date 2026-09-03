import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة الرابط","bn":"লিঙ্ক সরান","de":"Link entfernen","en":"Remove link","es":"Quitar enlace","fr":"Supprimer le lien","hi":"लिंक हटाएँ","id":"Hapus tautan","pt-BR":"Remover link","ru":"Удалить ссылку","ur":"لنک ہٹا دیں۔","zh-CN":"删除链接"};

export function settings_navbar_links_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
