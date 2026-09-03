import { getLocale } from '../runtime.js';

const translations = {"ar":"Nibleaf — منصة توثيق عربية وRTL فوق Markdown","bn":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","de":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","en":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","es":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","fr":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","hi":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","id":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","pt-BR":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","ru":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","ur":"Nibleaf — an Arabic and RTL documentation platform built on Markdown","zh-CN":"Nibleaf — an Arabic and RTL documentation platform built on Markdown"};

export function marketing_arabiclanding_imagealt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
