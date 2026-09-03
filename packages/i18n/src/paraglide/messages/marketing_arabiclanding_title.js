import { getLocale } from '../runtime.js';

const translations = {"ar":"منصة توثيق عربية وRTL فوق Markdown | Nibleaf","bn":"Arabic and RTL documentation platform built on Markdown | Nibleaf","de":"Arabic and RTL documentation platform built on Markdown | Nibleaf","en":"Arabic and RTL documentation platform built on Markdown | Nibleaf","es":"Arabic and RTL documentation platform built on Markdown | Nibleaf","fr":"Arabic and RTL documentation platform built on Markdown | Nibleaf","hi":"Arabic and RTL documentation platform built on Markdown | Nibleaf","id":"Arabic and RTL documentation platform built on Markdown | Nibleaf","pt-BR":"Arabic and RTL documentation platform built on Markdown | Nibleaf","ru":"Arabic and RTL documentation platform built on Markdown | Nibleaf","ur":"Arabic and RTL documentation platform built on Markdown | Nibleaf","zh-CN":"Arabic and RTL documentation platform built on Markdown | Nibleaf"};

export function marketing_arabiclanding_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
