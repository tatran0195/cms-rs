import { getLocale } from '../runtime.js';

const translations = {"ar":"LinkedIn","bn":"লিঙ্কডইন","de":"LinkedIn","en":"LinkedIn","es":"LinkedIn","fr":"LinkedIn","hi":"लिंक्डइन","id":"LinkedIn","pt-BR":"LinkedIn","ru":"LinkedIn","ur":"LinkedIn","zh-CN":"领英"};

export function settings_footer_linkedin_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
