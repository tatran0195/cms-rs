import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط","bn":"লিঙ্ক","de":"Link","en":"Link","es":"Enlace","fr":"Lien","hi":"लिंक","id":"Tautan","pt-BR":"Ligação","ru":"Ссылка","ur":"لنک","zh-CN":"链接"};

export function editor_format_link(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
