import { getLocale } from '../runtime.js';

const translations = {"ar":"جدد هذا الأسبوع","bn":"New this week","de":"New this week","en":"New this week","es":"New this week","fr":"New this week","hi":"New this week","id":"New this week","pt-BR":"New this week","ru":"New this week","ur":"New this week","zh-CN":"New this week"};

export function admin_overview_newthisweek(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
