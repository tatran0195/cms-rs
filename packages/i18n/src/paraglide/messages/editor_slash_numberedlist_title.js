import { getLocale } from '../runtime.js';

const translations = {"ar":"قائمة مرقّمة","bn":"সংখ্যাযুক্ত তালিকা","de":"Nummerierte Liste","en":"Numbered list","es":"lista numerada","fr":"Liste numérotée","hi":"क्रमांकित सूची","id":"Daftar bernomor","pt-BR":"Lista numerada","ru":"Нумерованный список","ur":"نمبر والی فہرست","zh-CN":"编号列表"};

export function editor_slash_numberedlist_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
