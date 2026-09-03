import { getLocale } from '../runtime.js';

const translations = {"ar":"ترقية إلى main","bn":"প্রধান মধ্যে উন্নীত","de":"In den Main hochstufen","en":"Promote into main","es":"Promocionar a principal","fr":"Promouvoir en principal","hi":"मुख्य में पदोन्नत करें","id":"Promosikan ke utama","pt-BR":"Promover em principal","ru":"Продвинуть в главную","ur":"مین میں فروغ دیں۔","zh-CN":"晋升为主"};

export function editor_branch_merge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
