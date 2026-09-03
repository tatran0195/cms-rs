import { getLocale } from '../runtime.js';

const translations = {"ar":"نعم","bn":"হ্যাঁ","de":"Ja","en":"Yes","es":"Sí","fr":"Oui","hi":"हाँ","id":"Ya","pt-BR":"Sim","ru":"Да","ur":"جی ہاں","zh-CN":"是的"};

export function site_feedbackyes(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
