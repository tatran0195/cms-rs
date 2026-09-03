import { getLocale } from '../runtime.js';

const translations = {"ar":"المزوّد متصل: {connected} · آخر تحديث: {updated}","bn":"Provider Connected {connected} {updated}","de":"Provider Connected {connected} {updated}","en":"Provider Connected {connected} {updated}","es":"Provider Connected {connected} {updated}","fr":"Provider Connected {connected} {updated}","hi":"Provider Connected {connected} {updated}","id":"Provider Connected {connected} {updated}","pt-BR":"Provider Connected {connected} {updated}","ru":"Provider Connected {connected} {updated}","ur":"Provider Connected {connected} {updated}","zh-CN":"Provider Connected {connected} {updated}"};

export function admin_user_providerconnected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
