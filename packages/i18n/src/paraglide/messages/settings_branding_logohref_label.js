import { getLocale } from '../runtime.js';

const translations = {"ar":"وجهة الشعار","bn":"লোগো গন্তব্য","de":"Logo-Ziel","en":"Logo destination","es":"Destino del logotipo","fr":"Destination du logo","hi":"लोगो गंतव्य","id":"Tujuan logo","pt-BR":"Destino do logotipo","ru":"Место назначения логотипа","ur":"لوگو کی منزل","zh-CN":"徽标目的地"};

export function settings_branding_logohref_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
