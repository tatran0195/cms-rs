import { getLocale } from '../runtime.js';

const translations = {"ar":"قديم","bn":"পুরোনো","de":"Legacy","en":"Legacy","es":"Anterior","fr":"Ancienne","hi":"पुरानी","id":"Lama","pt-BR":"Legada","ru":"Устаревший","ur":"پرانا","zh-CN":"旧版"};

export function settings_apikeys_legacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
