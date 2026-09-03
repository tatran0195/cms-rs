import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض الموقع","bn":"সাইট দেখুন","de":"Website ansehen","en":"View site","es":"Ver sitio","fr":"Voir le site","hi":"साइट देखें","id":"Lihat situs","pt-BR":"Ver site","ru":"Посмотреть сайт","ur":"سائٹ دیکھیں","zh-CN":"查看网站"};

export function deploy_viewsite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
