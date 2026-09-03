import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث عن لغة…","bn":"ভাষা খুঁজুন…","de":"Sprachen suchen…","en":"Search languages…","es":"Buscar idiomas…","fr":"Rechercher des langues…","hi":"भाषाएँ खोजें…","id":"Cari bahasa…","pt-BR":"Pesquisar idiomas…","ru":"Поиск языков…","ur":"زبانیں تلاش کریں…","zh-CN":"搜索语言..."};

export function editor_addlanguage_searchplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
