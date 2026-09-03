import { getLocale } from '../runtime.js';

const translations = {"ar":"دليل شراء ومقارنة مستقلة المصادر","bn":"Arabic page content","de":"Arabic page content","en":"دليل شراء ومقارنة مستقلة المصادر","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_eyebrow(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
