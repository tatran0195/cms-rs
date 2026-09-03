import { getLocale } from '../runtime.js';

const translations = {"ar":"خلفية الشيفرة","bn":"কোড পৃষ্ঠ","de":"Codeoberfläche","en":"Code surface","es":"Superficie de código","fr":"Surface du code","hi":"कोड सतह","id":"Permukaan kode","pt-BR":"Superfície de código","ru":"Поверхность кода","ur":"کوڈ کی سطح","zh-CN":"码面"};

export function settings_theme_color_code(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
