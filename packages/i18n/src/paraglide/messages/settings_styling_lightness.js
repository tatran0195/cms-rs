import { getLocale } from '../runtime.js';

const translations = {"ar":"السطوع","bn":"হালকাতা","de":"Leichtigkeit","en":"Lightness","es":"Ligereza","fr":"Légèreté","hi":"हल्कापन","id":"Ringan","pt-BR":"Leveza","ru":"Легкость","ur":"ہلکا پن","zh-CN":"亮度"};

export function settings_styling_lightness(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
