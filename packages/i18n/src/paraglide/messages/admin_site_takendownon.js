import { getLocale } from '../runtime.js';

const translations = {"ar":"أُوقف في {date}","bn":"Taken Down On {date}","de":"Taken Down On {date}","en":"Taken Down On {date}","es":"Taken Down On {date}","fr":"Taken Down On {date}","hi":"Taken Down On {date}","id":"Taken Down On {date}","pt-BR":"Taken Down On {date}","ru":"Taken Down On {date}","ur":"Taken Down On {date}","zh-CN":"Taken Down On {date}"};

export function admin_site_takendownon(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
