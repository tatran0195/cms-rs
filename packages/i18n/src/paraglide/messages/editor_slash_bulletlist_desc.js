import { getLocale } from '../runtime.js';

const translations = {"ar":"قائمة نقطية بسيطة.","bn":"একটি সাধারণ বুলেটেড তালিকা।","de":"Eine einfache Liste mit Aufzählungszeichen.","en":"A simple bulleted list.","es":"Una lista simple con viñetas.","fr":"Une simple liste à puces.","hi":"एक सरल बुलेटेड सूची.","id":"Daftar poin sederhana.","pt-BR":"Uma lista simples com marcadores.","ru":"Простой маркированный список.","ur":"ایک سادہ گولیوں والی فہرست۔","zh-CN":"一个简单的项目符号列表。"};

export function editor_slash_bulletlist_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
