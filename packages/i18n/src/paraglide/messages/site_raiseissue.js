import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح مشكلة","bn":"একটি সমস্যা উত্থাপন","de":"Sprechen Sie ein Problem an","en":"Raise an issue","es":"Plantear un problema","fr":"Soulever un problème","hi":"कोई मुद्दा उठाओ","id":"Angkat sebuah isu","pt-BR":"Levante um problema","ru":"Поднять проблему","ur":"ایک مسئلہ اٹھائیں","zh-CN":"提出问题"};

export function site_raiseissue(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
