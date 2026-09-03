import { getLocale } from '../runtime.js';

const translations = {"ar":"الفريق","bn":"দল","de":"Team","en":"Team","es":"equipo","fr":"Équipe","hi":"टीम","id":"Tim","pt-BR":"Equipe","ru":"Команда","ur":"ٹیم","zh-CN":"团队"};

export function settings_usage_group_team(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
