import { getLocale } from '../runtime.js';

const translations = {"ar":"البحث","bn":"অনুসন্ধান করুন","de":"Suchen","en":"Search","es":"Buscar","fr":"Rechercher","hi":"खोजें","id":"Cari","pt-BR":"Pesquisar","ru":"Поиск","ur":"تلاش کریں۔","zh-CN":"搜索"};

export function settings_search(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
