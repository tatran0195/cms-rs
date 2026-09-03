import { getLocale } from '../runtime.js';

const translations = {"ar":"فهرسة البحث","bn":"ইনডেক্সিং অনুসন্ধান","de":"Indizierungssuche","en":"Indexing search","es":"Búsqueda de indexación","fr":"Recherche d'indexation","hi":"अनुक्रमण खोज","id":"Pencarian pengindeksan","pt-BR":"Pesquisa de indexação","ru":"Индексирующий поиск","ur":"اشاریہ سازی کی تلاش","zh-CN":"索引搜索"};

export function deploy_step_indexing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
