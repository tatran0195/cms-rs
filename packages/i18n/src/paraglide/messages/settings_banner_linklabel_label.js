import { getLocale } from '../runtime.js';

const translations = {"ar":"نص الرابط","bn":"লিঙ্ক লেবেল","de":"Link-Label","en":"Link label","es":"Etiqueta de enlace","fr":"Libellé du lien","hi":"लिंक लेबल","id":"Label tautan","pt-BR":"Etiqueta do link","ru":"Ярлык ссылки","ur":"لنک کا لیبل","zh-CN":"链接标签"};

export function settings_banner_linklabel_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
