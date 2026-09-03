import { getLocale } from '../runtime.js';

const translations = {"ar":"الأيقونة","bn":"আইকন","de":"Symbol","en":"Icon","es":"Icono","fr":"Icône","hi":"चिह्न","id":"Ikon","pt-BR":"Ícone","ru":"Значок","ur":"آئیکن","zh-CN":"图标"};

export function editor_pagesettings_icon(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
