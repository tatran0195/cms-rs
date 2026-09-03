import { getLocale } from '../runtime.js';

const translations = {"ar":"السابق","bn":"আগের","de":"Zurück","en":"Previous","es":"Anterior","fr":"Précédent","hi":"पिछला","id":"Sebelumnya","pt-BR":"Anterior","ru":"Предыдущий","ur":"پچھلا","zh-CN":"上一页"};

export function site_previous(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
