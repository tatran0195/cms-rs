import { getLocale } from '../runtime.js';

const translations = {"ar":"السطح الهادئ","bn":"নিঃশব্দ পৃষ্ঠ","de":"Gedämpfte Oberfläche","en":"Muted surface","es":"Superficie apagada","fr":"Surface atténuée","hi":"मद्धम सतह","id":"Permukaan yang diredam","pt-BR":"Superfície silenciada","ru":"Приглушенная поверхность","ur":"خاموش سطح","zh-CN":"静音表面"};

export function settings_theme_color_muted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
