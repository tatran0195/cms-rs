import { getLocale } from '../runtime.js';

const translations = {"ar":"شارة","bn":"ব্যাজ","de":"Abzeichen","en":"Badge","es":"Insignia","fr":"Insigne","hi":"बिल्ला","id":"Lencana","pt-BR":"Distintivo","ru":"Значок","ur":"بیج","zh-CN":"徽章"};

export function editor_slash_badge_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
