import { getLocale } from '../runtime.js';

const translations = {"ar":"فترة UTC: {start} – {end}","bn":"UTC period: {start} – {end}","de":"UTC period: {start} – {end}","en":"UTC period: {start} – {end}","es":"UTC period: {start} – {end}","fr":"UTC period: {start} – {end}","hi":"UTC period: {start} – {end}","id":"UTC period: {start} – {end}","pt-BR":"UTC period: {start} – {end}","ru":"UTC period: {start} – {end}","ur":"UTC period: {start} – {end}","zh-CN":"UTC period: {start} – {end}"};

export function settings_usage_period(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
