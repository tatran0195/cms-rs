import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط موقع Ghost","bn":"ভূত সাইট URL","de":"URL der Geisterseite","en":"Ghost site URL","es":"URL del sitio fantasma","fr":"URL du site fantôme","hi":"भूत साइट यूआरएल","id":"URL situs hantu","pt-BR":"URL do site fantasma","ru":"URL-адрес сайта-призрака","ur":"گھوسٹ سائٹ کا URL","zh-CN":"幽灵网站网址"};

export function settings_import_ghost_url(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
