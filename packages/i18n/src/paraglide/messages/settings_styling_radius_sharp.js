import { getLocale } from '../runtime.js';

const translations = {"ar":"حادّة","bn":"তীক্ষ্ণ","de":"Scharf","en":"Sharp","es":"Afilado","fr":"Pointu","hi":"तीव्र","id":"Tajam","pt-BR":"Afiado","ru":"Острый","ur":"تیز","zh-CN":"夏普"};

export function settings_styling_radius_sharp(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
