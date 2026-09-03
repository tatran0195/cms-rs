import { getLocale } from '../runtime.js';

const translations = {"ar":"المعلومات","bn":"তথ্য","de":"Informationen","en":"Information","es":"Información","fr":"Informations","hi":"जानकारी","id":"Informasi","pt-BR":"Informação","ru":"Информация","ur":"معلومات","zh-CN":"信息"};

export function settings_theme_color_info(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
