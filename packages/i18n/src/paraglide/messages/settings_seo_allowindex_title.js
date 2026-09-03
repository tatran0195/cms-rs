import { getLocale } from '../runtime.js';

const translations = {"ar":"السماح لمحركات البحث","bn":"সার্চ ইঞ্জিনকে অনুমতি দিন","de":"Suchmaschinen zulassen","en":"Allow search engines","es":"Permitir motores de búsqueda","fr":"Autoriser les moteurs de recherche","hi":"खोज इंजनों को अनुमति दें","id":"Izinkan mesin pencari","pt-BR":"Permitir mecanismos de pesquisa","ru":"Разрешить поисковым системам","ur":"سرچ انجنوں کو اجازت دیں۔","zh-CN":"允许搜索引擎"};

export function settings_seo_allowindex_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
