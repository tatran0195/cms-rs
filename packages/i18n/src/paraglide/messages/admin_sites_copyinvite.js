import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ الدعوة","bn":"Copy invite","de":"Copy invite","en":"Copy invite","es":"Copy invite","fr":"Copy invite","hi":"Copy invite","id":"Copy invite","pt-BR":"Copy invite","ru":"Copy invite","ur":"Copy invite","zh-CN":"Copy invite"};

export function admin_sites_copyinvite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
