import { getLocale } from '../runtime.js';

const translations = {"ar":"الانتقال إلى","bn":"যান","de":"Gehe zu","en":"Go to","es":"Ir a","fr":"Aller à","hi":"पर जाएँ","id":"Pergi ke","pt-BR":"Vá para","ru":"Перейти к","ur":"پر جائیں۔","zh-CN":"前往"};

export function command_group_goto(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
