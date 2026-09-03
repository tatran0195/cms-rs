import { getLocale } from '../runtime.js';

const translations = {"ar":"معلومة","bn":"তথ্য","de":"Infos","en":"Info","es":"Información","fr":"Informations","hi":"जानकारी","id":"Informasi","pt-BR":"Informações","ru":"Информация","ur":"معلومات","zh-CN":"信息"};

export function editor_slash_info_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
