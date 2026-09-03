import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ الشيفرة","bn":"কোড কপি করুন","de":"Code kopieren","en":"Copy code","es":"Copiar código","fr":"Copier le code","hi":"कोड कॉपी करें","id":"Salin kode","pt-BR":"Copiar código","ru":"Скопировать код","ur":"کوڈ کاپی کریں۔","zh-CN":"复制代码"};

export function site_copycode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
