import { getLocale } from '../runtime.js';

const translations = {"ar":"مكدّسة","bn":"স্তূপীকৃত","de":"Untereinander","en":"Stacked","es":"Apiladas","fr":"Empilées","hi":"एक के नीचे एक","id":"Bertumpuk","pt-BR":"Empilhadas","ru":"Друг под другом","ur":"اوپر تلے","zh-CN":"纵向堆叠"};

export function settings_addons_consent_buttons_stacked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
