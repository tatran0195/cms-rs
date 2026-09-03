import { getLocale } from '../runtime.js';

const translations = {"ar":"جنبًا إلى جنب","bn":"পাশাপাশি","de":"Nebeneinander","en":"Side by side","es":"Una junto a otra","fr":"Côte à côte","hi":"साथ-साथ","id":"Berdampingan","pt-BR":"Lado a lado","ru":"Рядом","ur":"ساتھ ساتھ","zh-CN":"并排"};

export function settings_addons_consent_buttons_inline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
