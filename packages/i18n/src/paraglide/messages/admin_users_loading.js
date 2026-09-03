import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحميل…","bn":"Loading…","de":"Loading…","en":"Loading…","es":"Loading…","fr":"Loading…","hi":"Loading…","id":"Loading…","pt-BR":"Loading…","ru":"Loading…","ur":"Loading…","zh-CN":"Loading…"};

export function admin_users_loading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
