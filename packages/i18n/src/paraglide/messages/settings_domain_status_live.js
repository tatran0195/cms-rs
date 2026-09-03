import { getLocale } from '../runtime.js';

const translations = {"ar":"نشط","bn":"লাইভ","de":"Lebe","en":"Live","es":"en vivo","fr":"En direct","hi":"जियो","id":"Hidup","pt-BR":"Ao vivo","ru":"Живи","ur":"جیو","zh-CN":"直播"};

export function settings_domain_status_live(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
