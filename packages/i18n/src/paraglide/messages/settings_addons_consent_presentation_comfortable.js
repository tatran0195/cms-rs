import { getLocale } from '../runtime.js';

const translations = {"ar":"مريحة","bn":"স্বাচ্ছন্দ্যপূর্ণ","de":"Großzügig","en":"Comfortable","es":"Cómoda","fr":"Confortable","hi":"आरामदायक","id":"Lapang","pt-BR":"Confortável","ru":"Просторная","ur":"کشادہ","zh-CN":"宽松"};

export function settings_addons_consent_presentation_comfortable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
