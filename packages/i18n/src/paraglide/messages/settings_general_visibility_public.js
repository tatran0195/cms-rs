import { getLocale } from '../runtime.js';

const translations = {"ar":"عام","bn":"পাবলিক","de":"Öffentlich","en":"Public","es":"Público","fr":"Publique","hi":"सार्वजनिक","id":"Publik","pt-BR":"Público","ru":"Общественный","ur":"عوامی","zh-CN":"公共"};

export function settings_general_visibility_public(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
