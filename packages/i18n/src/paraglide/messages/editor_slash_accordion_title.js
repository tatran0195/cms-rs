import { getLocale } from '../runtime.js';

const translations = {"ar":"أكورديون","bn":"অ্যাকর্ডিয়ন","de":"Akkordeon","en":"Accordion","es":"acordeón","fr":"Accordéon","hi":"अकॉर्डियन","id":"Akordeon","pt-BR":"Acordeão","ru":"Аккордеон","ur":"ایکارڈین","zh-CN":"手风琴"};

export function editor_slash_accordion_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
