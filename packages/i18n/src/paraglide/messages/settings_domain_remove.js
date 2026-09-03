import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة","bn":"সরান","de":"Entfernen","en":"Remove","es":"Quitar","fr":"Supprimer","hi":"हटाओ","id":"Hapus","pt-BR":"Remover","ru":"Удалить","ur":"ہٹا دیں۔","zh-CN":"删除"};

export function settings_domain_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
