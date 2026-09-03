import { getLocale } from '../runtime.js';

const translations = {"ar":"مواقعك","bn":"আপনার সাইট","de":"Ihre Websites","en":"Your sites","es":"Tus sitios","fr":"Vos sites","hi":"आपकी साइटें","id":"Situs Anda","pt-BR":"Seus sites","ru":"Ваши сайты","ur":"آپ کی سائٹس","zh-CN":"您的网站"};

export function dashboard_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
