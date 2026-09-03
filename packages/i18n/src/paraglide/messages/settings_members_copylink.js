import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ الرابط","bn":"লিঙ্ক কপি করুন","de":"Link kopieren","en":"Copy link","es":"Copiar enlace","fr":"Copier le lien","hi":"लिंक कॉपी करें","id":"Salin tautan","pt-BR":"Copiar link","ru":"Скопировать ссылку","ur":"لنک کاپی کریں۔","zh-CN":"复制链接"};

export function settings_members_copylink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
