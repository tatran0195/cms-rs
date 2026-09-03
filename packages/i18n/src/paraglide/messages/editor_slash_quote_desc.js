import { getLocale } from '../runtime.js';

const translations = {"ar":"إدراج اقتباس.","bn":"একটি উদ্ধৃতি ক্যাপচার.","de":"Erfassen Sie ein Angebot.","en":"Capture a quotation.","es":"Capture una cotización.","fr":"Capturez une citation.","hi":"एक उद्धरण कैप्चर करें.","id":"Menangkap kutipan.","pt-BR":"Capture uma cotação.","ru":"Зафиксируйте цитату.","ur":"ایک اقتباس حاصل کریں۔","zh-CN":"捕获报价。"};

export function editor_slash_quote_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
