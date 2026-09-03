import { getLocale } from '../runtime.js';

const translations = {"ar":"العلامة التجارية","bn":"ব্র্যান্ডিং","de":"Branding","en":"Branding","es":"Marca","fr":"Image de marque","hi":"ब्रांडिंग","id":"merek","pt-BR":"Marca","ru":"Брендинг","ur":"برانڈنگ","zh-CN":"品牌推广"};

export function settings_branding_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
