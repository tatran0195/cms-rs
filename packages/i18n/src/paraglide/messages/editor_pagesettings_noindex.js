import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء من محركات البحث","bn":"সার্চ ইঞ্জিন থেকে লুকান","de":"Vor Suchmaschinen verstecken","en":"Hide from search engines","es":"Ocultarse de los motores de búsqueda","fr":"Masquer des moteurs de recherche","hi":"खोज इंजनों से छिपाएँ","id":"Sembunyikan dari mesin pencari","pt-BR":"Ocultar dos motores de busca","ru":"Скрыть от поисковых систем","ur":"سرچ انجنوں سے چھپائیں۔","zh-CN":"隐藏搜索引擎"};

export function editor_pagesettings_noindex(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
