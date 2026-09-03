import { getLocale } from '../runtime.js';

const translations = {"ar":"تقدم الاستخدام لـ {label}","bn":"Usage progress for {label}","de":"Usage progress for {label}","en":"Usage progress for {label}","es":"Usage progress for {label}","fr":"Usage progress for {label}","hi":"Usage progress for {label}","id":"Usage progress for {label}","pt-BR":"Usage progress for {label}","ru":"Usage progress for {label}","ur":"Usage progress for {label}","zh-CN":"Usage progress for {label}"};

export function settings_usage_progressLabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
