import { getLocale } from '../runtime.js';

const translations = {"ar":"أُوقف في {date}","bn":"Suspended On {date}","de":"Suspended On {date}","en":"Suspended On {date}","es":"Suspended On {date}","fr":"Suspended On {date}","hi":"Suspended On {date}","id":"Suspended On {date}","pt-BR":"Suspended On {date}","ru":"Suspended On {date}","ur":"Suspended On {date}","zh-CN":"Suspended On {date}"};

export function admin_user_suspendedon(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
