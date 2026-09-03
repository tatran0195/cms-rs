import { getLocale } from '../runtime.js';

const translations = {"ar":"قائمة مرتّبة ومرقّمة.","bn":"একটি আদেশকৃত, সংখ্যাযুক্ত তালিকা।","de":"Eine geordnete, nummerierte Liste.","en":"An ordered, numbered list.","es":"Una lista ordenada y numerada.","fr":"Une liste ordonnée et numérotée.","hi":"एक क्रमबद्ध, क्रमांकित सूची।","id":"Daftar yang terurut dan bernomor.","pt-BR":"Uma lista ordenada e numerada.","ru":"Упорядоченный нумерованный список.","ur":"ایک ترتیب شدہ، نمبر والی فہرست۔","zh-CN":"一个有序的、编号的列表。"};

export function editor_slash_numberedlist_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
