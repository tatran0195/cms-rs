import { getLocale } from '../runtime.js';

const translations = {"ar":"تنتهي الصلاحية:","bn":"মেয়াদ শেষ:","de":"Läuft ab:","en":"Expires:","es":"Caduca:","fr":"Expire le :","hi":"समाप्ति:","id":"Berakhir:","pt-BR":"Expira em:","ru":"Истекает:","ur":"میعاد ختم:","zh-CN":"到期时间："};

export function settings_apikeys_expires(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
