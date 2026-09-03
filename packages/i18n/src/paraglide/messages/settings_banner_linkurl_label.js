import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط الزر","bn":"লিঙ্ক URL","de":"Link-URL","en":"Link URL","es":"URL del enlace","fr":"URL du lien","hi":"लिंक यूआरएल","id":"URL tautan","pt-BR":"URL do link","ru":"URL-адрес ссылки","ur":"لنک یو آر ایل","zh-CN":"链接网址"};

export function settings_banner_linkurl_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
