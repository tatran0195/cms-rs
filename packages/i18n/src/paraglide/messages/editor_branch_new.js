import { getLocale } from '../runtime.js';

const translations = {"ar":"إصدار جديد","bn":"নতুন সংস্করণ","de":"Neue Version","en":"New version","es":"Nueva versión","fr":"Nouvelle version","hi":"नया संस्करण","id":"Versi baru","pt-BR":"Nova versão","ru":"Новая версия","ur":"نیا ورژن","zh-CN":"新版本"};

export function editor_branch_new(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
