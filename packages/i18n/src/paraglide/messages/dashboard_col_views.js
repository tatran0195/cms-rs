import { getLocale } from '../runtime.js';

const translations = {"ar":"المشاهدات","bn":"ভিউ","de":"Ansichten","en":"Views","es":"Vistas","fr":"Vues","hi":"दृश्य","id":"Tampilan","pt-BR":"Visualizações","ru":"Просмотры","ur":"مناظر","zh-CN":"意见"};

export function dashboard_col_views(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
