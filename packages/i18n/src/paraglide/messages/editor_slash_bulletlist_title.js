import { getLocale } from '../runtime.js';

const translations = {"ar":"قائمة نقطية","bn":"বুলেট তালিকা","de":"Bullet-Liste","en":"Bullet list","es":"lista de viñetas","fr":"Liste à puces","hi":"बुलेट सूची","id":"Daftar poin","pt-BR":"Lista com marcadores","ru":"Маркированный список","ur":"گولیوں کی فہرست","zh-CN":"项目符号列表"};

export function editor_slash_bulletlist_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
